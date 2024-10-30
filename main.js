const header = document.createElement("header");
header.id = "header";
header.className = "header-default";

const headerFirstDiv = document.createElement("div");
headerFirstDiv.className = "px_15 lg-px_40";
header.appendChild(headerFirstDiv);

const headerSecondDiv = document.createElement("div");
headerSecondDiv.className = "row wrapper-header align-items-center";
headerFirstDiv.appendChild(headerSecondDiv);

// Logo
const logoDiv = document.createElement("div");
logoDiv.className = "col-xl-3 col-md-4 col-6";
headerSecondDiv.appendChild(logoDiv);

const logoLink = document.createElement("a");
logoLink.className = "logo-header";
logoLink.href = "index.html";
logoDiv.appendChild(logoLink);

const logoImg = document.createElement("img");
logoImg.src = "images/logo/logo.svg";
logoImg.alt = "logo";
logoLink.appendChild(logoImg);

// menu
const navigationContainer = document.createElement("div");
navigationContainer.classList.add("col-xl-6", "tf-md-hidden");
headerSecondDiv.appendChild(navigationContainer);

const nav = document.createElement("nav");
nav.classList.add("box-navigation", "text-center");
navigationContainer.appendChild(nav);

const ul = document.createElement("ul");
ul.classList.add(
  "box-nav-ul",
  "d-flex",
  "align-items-center",
  "justify-content-center",
  "gap-30"
);
nav.appendChild(ul);

const menuItems = [
  { text: "خانه", href: "#", icon: "icon-arrow-down" },
  {
    text: "فروشگاه",
    href: "#",
    icon: "icon-arrow-down",
    subMenu: [
      {
        text: "چیدمان های فروشگاه",
        items: [
          { text: "پیشفرض", href: "shop-default.html" },
          { text: "نواربار چپ", href: "shop-left-sidebar.html" },
        ],
      },
      {
        text: "ویژگی ها",
        items: [
          { text: "پیوندهای صفحه بندی", href: "shop-link.html" },
          { text: "صفحه بندی بارگذاری بیشتر", href: "shop-loadmore.html" },
        ],
      },
      {
        text: "سبک های محصول",
        items: [
          { text: "سبک محصول لیست", href: "product-style-list.html" },
          { text: "سبک محصول 01", href: "product-style-01.html" },
          { text: "سبک محصول 02", href: "product-style-02.html" },
        ],
      },
    ],
  },
  {
    text: "محصولات",
    href: "#",
    icon: "icon-arrow-down",
    subMenu: [
      {
        text: "طرح بندی محصولات",
        items: [
          { text: "محصول پیشفرض", href: "product-detail.html" },
          { text: "محصول گرید 1", href: "product-grid-1.html" },
        ],
      },
      {
        text: "جزئیات محصول",
        items: [
          { text: "زوم داخلی محصول", href: "product-inner-zoom.html" },
          { text: "بزرگنمایی محصول", href: "product-zoom-magnifier.html" },
        ],
      },
      {
        text: "نمونه های محصول",
        items: [
          { text: "نمونه رنگ محصول", href: "product-color-swatch.html" },
          { text: "مستطیل محصول", href: "product-rectangle.html" },
        ],
      },
    ],
  },
  {
    text: "صفحات",
    href: "#",
    icon: "icon-arrow-down",
    subMenu: [
        { 
            text: "تماس با ما",
            items: [
                { text: "تماس با ما",  href: "contact-1.html"}
            ] 
        }],
  },
  { text: "وبلاگ", href: "#", icon: "icon-arrow-down" },
  { text: "هم اکنون خرید کنید", href: "#" },
];

menuItems.forEach((item) => {
  const li = document.createElement("li");
  li.classList.add("menu-item");

  const a = document.createElement("a");
  a.href = item.href;
  a.classList.add("item-link");
  a.textContent = item.text;

  if (item.icon) {
    const icon = document.createElement("i");
    icon.classList.add("icon", item.icon);
    a.appendChild(icon);
  }

  li.appendChild(a);

  if (item.subMenu) {
    const subMenuDiv = document.createElement("div");
    subMenuDiv.classList.add("sub-menu", "mega-menu");
    li.appendChild(subMenuDiv);

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    subMenuDiv.appendChild(containerDiv);

    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    containerDiv.appendChild(rowDiv);

    if (item.subMenu && item.subMenu.length > 0) {
      item.subMenu.forEach((subMenu) => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-lg-2");
        rowDiv.appendChild(colDiv);

        const megaMenuItemDiv = document.createElement("div");
        megaMenuItemDiv.classList.add("mega-menu-item");
        colDiv.appendChild(megaMenuItemDiv);

        const menuHeadingDiv = document.createElement("div");
        menuHeadingDiv.classList.add("menu-heading");
        menuHeadingDiv.textContent = subMenu.text;
        megaMenuItemDiv.appendChild(menuHeadingDiv);

        const ul = document.createElement("ul");
        ul.classList.add("menu-list");
        megaMenuItemDiv.appendChild(ul);

        if (subMenu.items && subMenu.items.length > 0) {
          subMenu.items.forEach((subMenuItem) => {
            const li = document.createElement("li");
            ul.appendChild(li);

            const a = document.createElement("a");
            a.href = subMenuItem.href;
            a.classList.add("menu-link-text", "link");
            a.textContent = subMenuItem.text;
            li.appendChild(a);
          });
        }
      });
    }
  }

  ul.appendChild(li);
});

// auth
const containerDiv = document.createElement("div");
containerDiv.classList.add("col-xl-3", "col-md-4", "col-3");

const authUl = document.createElement("ul");
authUl.classList.add(
  "nav-icon",
  "d-flex",
  "justify-content-end",
  "align-items-center",
  "gap-20"
);
containerDiv.appendChild(authUl);

const navItems = [
  {
    class: "nav-search",
    href: "#canvasSearch",
    icon: "icon-search",
    dataBsToggle: "offcanvas",
    ariaControls: "offcanvasLeft",
  },
  {
    class: "nav-account",
    href: "#login",
    icon: "icon-account",
    dataBsToggle: "modal",
  },
  {
    class: "nav-wishlist",
    href: "wishlist.html",
    icon: "icon-heart",
    extra: '<span class="count-box">0</span>',
  },
  {
    class: "nav-cart",
    href: "#shoppingCart",
    icon: "icon-bag",
    dataBsToggle: "modal",
    extra: '<span class="count-box">0</span>',
  },
];

navItems.forEach((item) => {
  const li = document.createElement("li");
  li.classList.add(item.class);

  const a = document.createElement("a");
  a.href = item.href;
  a.classList.add("nav-icon-item");
  if (item.dataBsToggle) a.setAttribute("data-bs-toggle", item.dataBsToggle);
  if (item.ariaControls) a.setAttribute("aria-controls", item.ariaControls);

  const icon = document.createElement("i");
  icon.classList.add("icon", item.icon);
  a.appendChild(icon);

  if (item.extra) a.innerHTML += item.extra;

  li.appendChild(a);
  authUl.appendChild(li);
});

headerSecondDiv.appendChild(containerDiv);

document.body.appendChild(header);
// End of Header

// slider
const mainSwiper = document.createElement("div");
mainSwiper.className = "swiper tf-sw-slideshow";
mainSwiper.setAttribute("data-preview", "1");
mainSwiper.setAttribute("data-mobile", "1");
mainSwiper.setAttribute("data-space", "0");
mainSwiper.setAttribute("data-loop", "true");
mainSwiper.setAttribute("data-delay", "1390");
mainSwiper.setAttribute("data-speed", "1000");

const swiperWrapper = document.createElement("div");
swiperWrapper.classList.add("swiper-wrapper");

const swiperSlide = document.createElement("div");
swiperSlide.classList.add("swiper-slide");
swiperSlide.setAttribute("lazy", "true");

const wrapSlider = document.createElement("div");
wrapSlider.classList.add("wrap-slider");

const sliderImg = document.createElement("img");
sliderImg.classList.add("lazyload");
sliderImg.setAttribute("data-src", "images/slider/fashion-slideshow-04.jpg");
sliderImg.setAttribute("src", "images/slider/fashion-slideshow-04.jpg");
sliderImg.setAttribute("alt", "fashion-slideshow-01");
wrapSlider.appendChild(sliderImg);

const boxContent = document.createElement("div");
boxContent.classList.add("box-content");

const sliderContainer = document.createElement("div");
sliderContainer.classList.add("container");

const h1 = document.createElement("h1");
h1.classList.add("fade-item", "fade-item-1");
h1.innerHTML = "سبک تابستانی<br />احساسات";
sliderContainer.appendChild(h1);

const p = document.createElement("p");
p.classList.add("fade-item", "fade-item-2");
p.textContent = "جذاب ترین ترندها و ظاهرهای ضروری را کشف کنید";
sliderContainer.appendChild(p);

const sliderAnchor = document.createElement("a");
sliderAnchor.href = "shop-default.html";
sliderAnchor.classList.add(
  "fade-item",
  "fade-item-3",
  "tf-btn",
  "btn-fill",
  "animate-hover-btn",
  "btn-xl",
  "radius-3"
);

const sliderSpan = document.createElement("span");
sliderSpan.textContent = "مجموعه فروشگاه";
sliderAnchor.appendChild(sliderSpan);

const sliderIcon = document.createElement("i");
sliderIcon.classList.add("icon", "icon-arrow-right");
sliderAnchor.appendChild(sliderIcon);

sliderContainer.appendChild(sliderAnchor);
boxContent.appendChild(sliderContainer);
wrapSlider.appendChild(boxContent);
swiperSlide.appendChild(wrapSlider);
swiperWrapper.appendChild(swiperSlide);
mainSwiper.appendChild(swiperWrapper);

document.body.appendChild(mainSwiper);

// pagination
const wrapPagination = document.createElement("div");
wrapPagination.classList.add("wrap-pagination", "sw-absolute-2");

const pagiContainer = document.createElement("div");
pagiContainer.classList.add("container");

const swDots = document.createElement("div");
swDots.classList.add("sw-dots", "sw-pagination-slider");

pagiContainer.appendChild(swDots);
wrapPagination.appendChild(pagiContainer);

document.body.appendChild(wrapPagination);

// Collection
const collectionSection = document.createElement("section");
collectionSection.classList.add("flat-spacing-8");

const containerFull = document.createElement("div");
containerFull.classList.add("container-full");

const masonryLayout = document.createElement("div");
masonryLayout.classList.add("masonry-layout");

const items = [
  {
    class: "item-1",
    href: "shop-women.html",
    imgSrc: "images/collections/collection-21.jpg",
    text: "زنان",
    dataWowDelay: "0s",
  },
  {
    class: "item-2",
    href: "shop-default.html",
    imgSrc: "images/collections/collection-22.jpg",
    text: "کیف دستی",
    dataWowDelay: ".1s",
  },
  {
    class: "item-3",
    href: "shop-default.html",
    imgSrc: "images/collections/collection-23.jpg",
    text: "لوازم جانبی",
    dataWowDelay: ".2s",
  },
  {
    class: "item-4",
    href: "shop-men.html",
    imgSrc: "images/collections/collection-24.jpg",
    text: "مردان",
    dataWowDelay: "0s",
  },
];

items.forEach((item) => {
  const collectionItem = document.createElement("div");
  collectionItem.classList.add(
    item.class,
    "collection-item",
    "large",
    "hover-img",
    "wow",
    "fadeInUp"
  );
  collectionItem.setAttribute("data-wow-delay", item.dataWowDelay);

  const collectionInner = document.createElement("div");
  collectionInner.classList.add("collection-inner");
  collectionItem.appendChild(collectionInner);

  const anchorImg = document.createElement("a");
  anchorImg.href = item.href;
  anchorImg.classList.add("collection-image", "img-style", "rounded-0");

  const img = document.createElement("img");
  img.classList.add("lazyload");
  img.setAttribute("data-src", item.imgSrc);
  img.src = item.imgSrc;
  img.alt = "collection-img";
  anchorImg.appendChild(img);

  const collectionContent = document.createElement("div");
  collectionContent.classList.add("collection-content");

  const anchorContent = document.createElement("a");
  anchorContent.href = item.href;
  anchorContent.classList.add("tf-btn", "collection-title", "hover-icon");
  anchorContent.innerHTML = `<span>${item.text}</span><i class="icon icon-arrow1-top-right"></i>`;

  collectionContent.appendChild(anchorContent);
  collectionInner.appendChild(anchorImg);
  collectionInner.appendChild(collectionContent);
  masonryLayout.appendChild(collectionItem);
});

containerFull.appendChild(masonryLayout);
collectionSection.appendChild(containerFull);

document.body.appendChild(collectionSection);

// store
const storeSection = document.createElement("section");
storeSection.classList.add("flat-spacing-4", "pt_0");

const container = document.createElement("div");
container.classList.add("container");

const gridLayout = document.createElement("div");
gridLayout.classList.add("tf-grid-layout", "md-col-2", "tf-img-with-text");

const tfImageWrap = document.createElement("div");
tfImageWrap.classList.add("tf-image-wrap", "wow", "fadeInUp");
tfImageWrap.setAttribute("data-wow-delay", "0s");

const collectionImg = document.createElement("img");
collectionImg.classList.add("lazyload");
collectionImg.setAttribute("data-src", "images/collections/collection-25.jpg");
collectionImg.setAttribute("src", "images/collections/collection-25.jpg");
collectionImg.setAttribute("alt", "collection-img");
tfImageWrap.appendChild(collectionImg);

const tfContentWrap = document.createElement("div");
tfContentWrap.classList.add("tf-content-wrap", "wow", "fadeInUp");
tfContentWrap.setAttribute("data-wow-delay", "0s");

const collectionSpan = document.createElement("span");
collectionSpan.classList.add("sub-heading", "text-uppercase", "fw-7");
collectionSpan.textContent = "فروش بهاره 30% تخفیف";
tfContentWrap.appendChild(collectionSpan);

const heading = document.createElement("div");
heading.classList.add("heading");
heading.innerHTML = "شلوار جین حرفه ای <br /> Delights";
tfContentWrap.appendChild(heading);

const description = document.createElement("p");
description.classList.add("description");
description.textContent =
  "همه کاره بودن جین را با مجموعه شلوار جین، کت ما کشف کنید";
tfContentWrap.appendChild(description);

const anchor = document.createElement("a");
anchor.href = "shop-collection-list.html";
anchor.classList.add(
  "tf-btn",
  "style-2",
  "btn-fill",
  "radius-3",
  "animate-hover-btn"
);
anchor.textContent = "مجموعه فروشگاه";

const collectionIcon = document.createElement("i");
collectionIcon.classList.add("icon", "icon-arrow1-top-right");
anchor.appendChild(collectionIcon);

tfContentWrap.appendChild(anchor);
gridLayout.appendChild(tfImageWrap);
gridLayout.appendChild(tfContentWrap);
container.appendChild(gridLayout);
storeSection.appendChild(container);

document.body.appendChild(storeSection);

// Best Saller
const bestSallerSection = document.createElement("section");
bestSallerSection.className = "flat-spacing-2 pt_0";

const bestSallerContainer = document.createElement("div");
bestSallerContainer.className = "container";
bestSallerSection.appendChild(bestSallerContainer);

const flatTitleDiv = document.createElement("div");
flatTitleDiv.classList.add(
  "flat-title",
  "flex-row",
  "justify-content-between",
  "px-0"
);
bestSallerContainer.appendChild(flatTitleDiv);

const span = document.createElement("span");
span.classList.add("title", "wow", "fadeInUp");
span.setAttribute("data-wow-delay", "0s");
span.textContent = "پرفروش ترین";
flatTitleDiv.appendChild(span);

const boxSwNavigationDiv = document.createElement("div");
boxSwNavigationDiv.classList.add("box-sw-navigation");

const navNextSliderDiv = document.createElement("div");
navNextSliderDiv.classList.add(
  "nav-sw",
  "square",
  "nav-next-slider",
  "nav-next-product"
);
const navNextSpan = document.createElement("span");
navNextSpan.classList.add("icon", "icon-arrow1-left");
navNextSliderDiv.appendChild(navNextSpan);
boxSwNavigationDiv.appendChild(navNextSliderDiv);

const navPrevSliderDiv = document.createElement("div");
navPrevSliderDiv.classList.add(
  "nav-sw",
  "square",
  "nav-prev-slider",
  "nav-prev-product"
);
const navPrevSpan = document.createElement("span");
navPrevSpan.classList.add("icon", "icon-arrow1-right");
navPrevSliderDiv.appendChild(navPrevSpan);
boxSwNavigationDiv.appendChild(navPrevSliderDiv);

flatTitleDiv.appendChild(boxSwNavigationDiv);

const bestSallerHover = document.createElement("div");
bestSallerHover.className = "hover-sw-nav hover-sw-2";
bestSallerContainer.appendChild(bestSallerHover);

const bestSallerSwiper = document.createElement("div");
bestSallerSwiper.className = "swiper tf-sw-product-sell wrap-sw-over";
bestSallerSwiper.setAttribute("data-preview", "4");
bestSallerSwiper.setAttribute("data-tablet", "3");
bestSallerSwiper.setAttribute("data-mobile", "2");
bestSallerSwiper.setAttribute("data-space-lg", "30");
bestSallerSwiper.setAttribute("data-space-md", "15");
bestSallerSwiper.setAttribute("data-pagination", "2");
bestSallerSwiper.setAttribute("data-pagination-md", "3");
bestSallerSwiper.setAttribute("data-pagination-lg", "3");
bestSallerHover.appendChild(bestSallerSwiper);

const bestSallerWrapper = document.createElement("div");
bestSallerWrapper.className = "swiper-wrapper";
bestSallerSwiper.appendChild(bestSallerWrapper);

function createProductSlide(product) {
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");
  swiperSlide.setAttribute("lazy", "true");

  const cardProduct = document.createElement("div");
  cardProduct.classList.add("card-product", "style-2");
  swiperSlide.appendChild(cardProduct);

  const cardProductWrapper = document.createElement("div");
  cardProductWrapper.classList.add("card-product-wrapper");
  cardProduct.appendChild(cardProductWrapper);

  const productImgLink = document.createElement("a");
  productImgLink.href = product.detailLink;
  productImgLink.classList.add("product-img");
  cardProductWrapper.appendChild(productImgLink);

  const productImg = document.createElement("img");
  productImg.classList.add("lazyload", "img-product");
  productImg.setAttribute("data-src", product.imgSrc);
  productImg.src = product.imgSrc;
  productImg.alt = "image-product";
  productImgLink.appendChild(productImg);

  const productImgHover = document.createElement("img");
  productImgHover.classList.add("lazyload", "img-hover");
  productImgHover.setAttribute("data-src", product.imgHoverSrc);
  productImgHover.src = product.imgHoverSrc;
  productImgHover.alt = "image-product";
  productImgLink.appendChild(productImgHover);

  const listProductBtnColumnLeft = document.createElement("div");
  listProductBtnColumnLeft.classList.add("list-product-btn", "column-left");
  cardProductWrapper.appendChild(listProductBtnColumnLeft);

  const wishlistLink = document.createElement("a");
  wishlistLink.href = "javascript:void(0);";
  wishlistLink.classList.add(
    "box-icon",
    "wishlist",
    "bg_white",
    "btn-icon-action"
  );
  wishlistLink.innerHTML = `
      <span class="icon icon-heart"></span>
      <span class="tooltip">افزودن به لیست علاقه مندی</span>
      <span class="icon icon-delete"></span>`;
  listProductBtnColumnLeft.appendChild(wishlistLink);

  const compareLink = document.createElement("a");
  compareLink.href = "#compare";
  compareLink.classList.add(
    "box-icon",
    "bg_white",
    "compare",
    "btn-icon-action"
  );
  compareLink.setAttribute("data-bs-toggle", "offcanvas");
  compareLink.setAttribute("aria-controls", "offcanvasLeft");
  compareLink.innerHTML = `
      <span class="icon icon-compare"></span>
      <span class="tooltip">افزودن به مقایسه</span>
      <span class="icon icon-check"></span>`;
  listProductBtnColumnLeft.appendChild(compareLink);

  const sizeList = document.createElement("div");
  sizeList.classList.add("size-list", "style-2");
  sizeList.innerHTML = `
      <span>S</span>
      <span>M</span>
      <span>L</span>
      <span>XL</span>`;
  cardProductWrapper.appendChild(sizeList);

  const listProductBtnAbsolute = document.createElement("div");
  listProductBtnAbsolute.classList.add("list-product-btn", "absolute-3");
  cardProductWrapper.appendChild(listProductBtnAbsolute);

  const quickAddLink = document.createElement("a");
  quickAddLink.href = "#quick_add";
  quickAddLink.classList.add("box-icon", "quick-add", "style-2");
  quickAddLink.setAttribute("data-bs-toggle", "modal");
  quickAddLink.innerHTML = `
      <span class="icon icon-bag"></span>
      <span class="text">افزودن سریع</span>`;
  listProductBtnAbsolute.appendChild(quickAddLink);

  const quickViewLink = document.createElement("a");
  quickViewLink.href = "#quick_view";
  quickViewLink.classList.add("box-icon", "quickview", "style-2");
  quickViewLink.setAttribute("data-bs-toggle", "modal");
  quickViewLink.innerHTML = `
      <span class="icon icon-view"></span>
      <span class="text">نمایش سریع</span>`;
  listProductBtnAbsolute.appendChild(quickViewLink);

  const cardProductInfo = document.createElement("div");
  cardProductInfo.classList.add("card-product-info");
  cardProduct.appendChild(cardProductInfo);

  const productDetailLink = document.createElement("a");
  productDetailLink.href = product.detailLink;
  productDetailLink.classList.add("title", "link");
  productDetailLink.textContent = product.name;
  cardProductInfo.appendChild(productDetailLink);

  const priceSpan = document.createElement("span");
  priceSpan.classList.add("price");
  priceSpan.innerHTML = `${product.price}<toman> تومان </toman>`;
  cardProductInfo.appendChild(priceSpan);

  return swiperSlide;
}

const products = [
  {
    imgSrc: "images/products/orange-1.jpg",
    imgHoverSrc: "images/products/white-1.jpg",
    detailLink: "product-detail.html",
    name: "زیرپوش آجدار آدیداس",
    price: "16.95",
  },
  {
    imgSrc: "images/products/brown.jpg",
    imgHoverSrc: "images/products/purple.jpg",
    detailLink: "product-detail.html",
    name: "تی شرت راه راه تابستانه",
    price: "18.95",
  },
  {
    imgSrc: "images/products/white-3.jpg",
    imgHoverSrc: "images/products/white-4.jpg",
    detailLink: "product-detail.html",
    name: "تیشرت تابستانه سایز بزرگ",
    price: "10.00",
  },
  {
    imgSrc: "images/products/white-2.jpg",
    imgHoverSrc: "images/products/pink-1.jpg",
    detailLink: "product-detail.html",
    name: "تیشرت تابستانه سایز بزرگ",
    price: "18.55",
  },
  {
    imgSrc: "images/products/light-green-1.jpg",
    imgHoverSrc: "images/products/light-green-2.jpg",
    detailLink: "product-detail.html",
    name: "سویشرت گشاد",
    price: "16.95",
  },
  {
    imgSrc: "images/products/black-4.jpg",
    imgHoverSrc: "images/products/black-5.jpg",
    detailLink: "product-detail.html",
    name: "پیراهن معمولی آکسفورد",
    price: "10.00",
  },
];


products.forEach((product) => {
  const slide = createProductSlide(product);
  bestSallerWrapper.appendChild(slide);
});

document.body.appendChild(bestSallerSection);
// \Best Saller

