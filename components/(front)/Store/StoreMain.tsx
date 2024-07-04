"use client";
import React, { useEffect, useState } from "react";
import Aside from "@/components/(front)/Store/Aside";
import { instantProducts } from "@/constants/(front)";
import ProductItem from "@/components/(front)/Product/ProductItem";
import {
  IoChevronDown,
  IoChevronUp,
  IoFileTrayFullOutline,
  IoFileTrayOutline,
} from "react-icons/io5";
import {
  productAttributesTypes,
  productTypes,
} from "@/types/product/productTypes";
import CustomButton from "@/components/others/CustomButton";

interface IStoreMainProps {
  mainCategorySlug?: string;
  categorySlug?: string;
  breadcrumbTitle?: React.ReactNode;
}

const sortingOptions = [
  { name: "Tarihe göre ( Son eklenen )", value: "date_desc" },
  { name: "Tarihe göre ( İlk eklenen )", value: "date_asc" },
  { name: "Fiyata göre ( Önce en yüksek )", value: "price_desc" },
  { name: "Fiyata göre ( Önce en düşük )", value: "price_asc" },
];

function StoreMain({
  mainCategorySlug,
  categorySlug,
  breadcrumbTitle,
}: IStoreMainProps) {
  const [search, setSearch] = useState("");
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<
    productTypes[] | null
  >(null);
  const [initialProducts, setInitialProducts] = useState<productTypes[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);
  const [initialPriceRange, setInitialPriceRange] = useState<[number, number]>([
    0, 0,
  ]);
  const [sorting, setSorting] = useState<{
    sortingName: string;
    sorting: string;
  }>({ sortingName: "", sorting: "" });
  const [isSortingOpen, setIsSortingOpen] = useState(false);

  const [brands, setBrands] = useState<string[] | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const [productAttributes, setProductAttributes] = useState<
    productAttributesTypes[] | null
  >(null);
  const [selectedAttributes, setSelectedAttributes] = useState<{
    [key: string]: string[];
  }>({});

  useEffect(() => {
    setLoadingProducts(true);
    const timeoutId = setTimeout(() => {
      const filtered = instantProducts.filter((product) => {
        const matchesSearch =
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.code.toLowerCase().includes(search.toLowerCase());
        const matchesMainCategory = mainCategorySlug
          ? product.mainCategory_slug === mainCategorySlug
          : true;
        const matchesCategory = categorySlug
          ? product.category_slug === categorySlug
          : true;
        return matchesSearch && matchesMainCategory && matchesCategory;
      });

      setInitialProducts(filtered);
      const priceValues = filtered.map((product) => product.price);
      setPriceRange([Math.min(...priceValues), Math.max(...priceValues)]);
      setInitialPriceRange([
        Math.min(...priceValues),
        Math.max(...priceValues),
      ]);
      setFilteredProducts(filtered);

      const brandSet: Set<string> = new Set(
        filtered
          .map((product) => product.brand)
          .filter((brand): brand is string => brand !== null)
      );
      setBrands(Array.from(brandSet));

      const attributes = filtered
        .map((product) => product.attributes)
        .filter(
          (attributes): attributes is productAttributesTypes[] => !!attributes
        );
      setProductAttributes(attributes.length > 0 ? attributes.flat() : null);

      setLoadingProducts(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search, mainCategorySlug, categorySlug]);

  const filterProducts = (
    searchTerm: string,
    mainCategory?: string,
    category?: string,
    priceRange?: [number, number],
    sortOption?: string,
    selectedBrands?: string[],
    selectedAttributes?: { [key: string]: string[] }
  ) => {
    setLoadingProducts(true);
    const timeoutId = setTimeout(() => {
      const searchLower = searchTerm.toLowerCase();
      const filtered = initialProducts.filter((product) => {
        const matchesSearch =
          product.title.toLowerCase().includes(searchLower) ||
          product.code.toLowerCase().includes(searchLower);
        const matchesMainCategory = mainCategory
          ? product.mainCategory_slug === mainCategory
          : true;
        const matchesCategory = category
          ? product.category_slug === category
          : true;
        const matchesPriceRange = priceRange
          ? product.price >= priceRange[0] && product.price <= priceRange[1]
          : true;
        const matchesBrand = selectedBrands?.length
          ? selectedBrands.includes(product.brand as string)
          : true;
        const matchesAttributes = selectedAttributes
          ? Object.entries(selectedAttributes).every(
              ([attrTitle, attrValues]) =>
                product.attributes?.some(
                  (attr) =>
                    attr.attr_title === attrTitle &&
                    attr.attr_options.some((option) =>
                      attrValues.includes(option.option_name)
                    )
                )
            )
          : true;
        return (
          matchesSearch &&
          matchesMainCategory &&
          matchesCategory &&
          matchesPriceRange &&
          matchesBrand &&
          matchesAttributes
        );
      });

      const sorted = [...filtered].sort((a, b) => {
        switch (sortOption) {
          case "price_asc":
            return a.price - b.price;
          case "price_desc":
            return b.price - a.price;
          case "date_asc":
            return (
              new Date(a.created_at).getTime() -
              new Date(b.created_at).getTime()
            );
          case "date_desc":
            return (
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
            );
          default:
            return 0;
        }
      });

      setFilteredProducts(sorted);

      // Tüm ürünlerden benzersiz öznitelikleri topla
      const mergedAttributes: { [key: string]: any[] } = {};

      filtered.forEach((product) => {
        if (product.attributes) {
          product.attributes.forEach((attr) => {
            const { attr_title, attr_options } = attr;
            if (!mergedAttributes[attr_title]) {
              mergedAttributes[attr_title] = [];
            }
            attr_options.forEach((option: any) => {
              const existingOption = mergedAttributes[attr_title].find(
                (opt) => opt.option_name === option.option_name
              );
              if (!existingOption) {
                mergedAttributes[attr_title].push(option);
              }
            });
          });
        }
      });

      // Dizine dönüştür
      const mergedAttributesArray = Object.keys(mergedAttributes).map(
        (key) => ({
          attr_title: key,
          attr_options: mergedAttributes[key],
        })
      );

      setProductAttributes(
        mergedAttributesArray.length > 0 ? mergedAttributesArray : null
      );

      setLoadingProducts(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    filterProducts(
      search,
      mainCategorySlug,
      categorySlug,
      priceRange,
      sorting.sorting,
      selectedBrands,
      selectedAttributes
    );
  }, [
    search,
    mainCategorySlug,
    categorySlug,
    priceRange,
    sorting,
    selectedBrands,
    selectedAttributes,
  ]);

  return (
    <div className="container mx-auto px-4 w-full max-lg:pt-6">
      <div className="flex lg:flex-row flex-col gap-6 w-full h-full">
        <Aside
          mainCategorySlug={mainCategorySlug}
          categorySlug={categorySlug}
          search={search}
          setSearch={setSearch}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          initialPriceRange={initialPriceRange}
          filterProducts={filterProducts}
          brands={brands}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          productAttributes={productAttributes}
          selectedAttributes={selectedAttributes}
          setSelectedAttributes={setSelectedAttributes}
        />
        <main className="flex flex-col w-full gap-6">
          <div className="flex lg:flex-row flex-col justify-between max-lg:text-center gap-4 items-center -mb-3.5">
            <div className="flex flex-col gap-2 *:leading-6 w-full">
              <h1 className="flex items-center max-lg:justify-center font-semibold text-2xl text-site">
                {breadcrumbTitle}
              </h1>
              <p className="text-sm opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="relative max-lg:w-full">
              <CustomButton
                title={
                  sorting.sortingName !== ""
                    ? sorting.sortingName
                    : "Gelişmiş Sıralama"
                }
                rightIcon={
                  isSortingOpen ? (
                    <IoChevronUp size={20} />
                  ) : (
                    <IoChevronDown size={20} />
                  )
                }
                containerStyles={`${
                  isSortingOpen ? "rounded-t-xl" : "rounded-md"
                } flex gap-2 py-3 px-4 bg-white items-center border border-gray-200 w-full justify-between text-gray-600 lg:text-sm min-w-[250px] transition-all duration-300 hover:bg-site/10 hover:text-site hover:border-transparent`}
                btnType="button"
                handleClick={() => setIsSortingOpen(!isSortingOpen)}
              />
              {isSortingOpen && (
                <div className="absolute top-full bg-white shadow-md w-full rounded-b-xl overflow-hidden z-10 max-h-[400px] overflow-y-auto">
                  <div className="flex flex-col w-full">
                    {sorting.sortingName !== "" && (
                      <CustomButton
                        title={"Gelişmiş Sıralama"}
                        containerStyles="cursor-pointer py-2 px-4 transition-all border-b last:border-b-0 w-full text-left lg:text-sm hover:text-site transition-all duration-300"
                        handleClick={() => {
                          setSorting({
                            sortingName: "",
                            sorting: "",
                          });
                          setIsSortingOpen(false);
                        }}
                        btnType="button"
                      />
                    )}
                    {sortingOptions &&
                      sortingOptions.map((sorting, key) => (
                        <CustomButton
                          title={sorting.name}
                          key={key}
                          containerStyles="cursor-pointer py-2 px-4 transition-all border-b last:border-b-0 w-full text-left lg:text-sm hover:text-site transition-all duration-300"
                          handleClick={() => {
                            setSorting({
                              sortingName: sorting.name,
                              sorting: sorting.value,
                            });
                            setIsSortingOpen(false);
                          }}
                          btnType="button"
                        />
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <hr />
          {loadingProducts ? (
            <div className="flex flex-col gap-4 h-[500px] justify-center items-center text-gray-300">
              <IoFileTrayFullOutline className="lg:text-7xl text-6xl" />
              <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
                Ürün aranıyor...
              </span>
            </div>
          ) : (
            <>
              {filteredProducts && filteredProducts.length === 0 ? (
                <div className="flex flex-col gap-4 h-[500px] justify-center items-center animate-pulse text-gray-600">
                  <IoFileTrayOutline className="lg:text-7xl text-6xl" />
                  <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
                    Aradığınız Ürün Bulunamadı
                  </span>
                </div>
              ) : (
                <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-6 gap-3 w-full">
                  {filteredProducts &&
                    filteredProducts.map((product) => (
                      <ProductItem
                        key={product.id}
                        product={product}
                        height={395}
                        mobileHeight={335}
                      />
                    ))}
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default StoreMain;
