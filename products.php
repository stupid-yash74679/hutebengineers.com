<!DOCTYPE html>
<html
    data-style-switcher-options="{'changeLogo': false, 'colorPrimary': '#f04c23', 'colorSecondary': '#e36159', 'colorTertiary': '#2baab1', 'colorQuaternary': '#383f48', 'borderRadius': 0}">

<?php require('header.php') ?>

<body data-plugin-cursor-effect>
    <div class="body">
        <?php require('menu.php') ?>

        <div role="main" class="main">

            <section
                class="section section-with-shape-divider page-header page-header-modern page-header-lg border-0 my-0 lazyload"
                data-bg-src="img/demos/business-consulting-3/backgrounds/background-5.jpg"
                style="background-size: cover; background-position: center;">
                <div class="container pb-5 my-3">
                    <div class="row mb-4">
                        <div class="col-md-12 align-self-center p-static order-2 text-center">
                            <h1 class="font-weight-bold text-color-dark text-10">Our Products</h1>
                        </div>
                        <div class="col-md-12 align-self-center order-1">
                            <ul class="breadcrumb d-block text-center">
                                <li><a href="/index.php">Home</a></li>
                                <li class="active">Products</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="shape-divider shape-divider-bottom shape-divider-reverse-x" style="height: 123px;">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px" y="0px" viewBox="0 0 1920 123" preserveAspectRatio="xMinYMin">
                        <polygon fill="#F3F3F3" points="0,90 221,60 563,88 931,35 1408,93 1920,41 1920,-1 0,-1 " />
                        <polygon fill="#FFFFFF" points="0,75 219,44 563,72 930,19 1408,77 1920,25 1920,-1 0,-1 " />
                    </svg>
                </div>
            </section>

            <div class="container pt-3 pb-5 mt-4 mb-5">
                <div class="row">
                    <div class="col text-center">
                        <h2 class="text-9 text-lg-5 text-xl-9 line-height-3 text-transform-none font-weight-semibold mb-4 mb-lg-3 mb-xl-4 appear-animation"
                            data-appear-animation="fadeInUpShorter" data-appear-animation-delay="250">Precision
                            Engineering | Extended Service Life<br>Comprehensive Support</h2>
                        <p class="text-3-5 mb-5 appear-animation" data-appear-animation="fadeInUpShorter"
                            data-appear-animation-delay="500">We are a leading manufacturing and marketing company
                            specializing in Anti Corrosive, Chemical Coating, Water Proofing, Chemical & Epoxy
                            Polyurethane applications. The undersigned has a background in Mechanical Engineering and
                            Business Administration and has extensive experience in solving problems related to
                            corrosion, abrasion, and highly corrosive areas.</p>
                    </div>
                </div>
                <div data-bind="foreach: products">
                    <div data-bind="attr: { id : id}" class="row mb-5 ">
                        <div class="col">
                            <div class="d-flex flex-wrap bg-light box-shadow-4 custom-link-hover-effects">
                                <div class="position-relative col-12 col-md-4"
                                    data-bind="style: { 'background-image' : imagepath}"
                                    style="background-position: center; background-repeat: no-repeat; background-position: top">
                                    <img width="100%" data-bind="attr: { src : imagepath }" />
                                    <div class="position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3">
                                        <div class="custom-crooked-line">
                                            <img width="154" height="26"
                                                src="img/demos/business-consulting-3/icons/infinite-crooked-line.svg"
                                                alt="" data-icon
                                                data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                                                style="width: 154px;" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8 p-5">
                                    <div class="d-flex justify-content-between justify-content-md-start mb-4">
                                        <div>
                                            <h2 class="font-weight-semibold text-6 line-height-1 mb-0"><span
                                                    data-bind="text: name"></span></h2>
                                            <p class="text-3-5 mb-0"><span data-bind="text: cat"></span></p>
                                        </div>
                                        <div class="bg-color-grey ms-4 me-1 d-none d-md-block" style="width: 8px;">
                                        </div>
                                    </div>
                                    <div class="custom-read-more-style-1">
                                        <p class="text-3-5" data-bind="html: longdescription"></p>
                                    </div>
                                    <div class="tabs tabs-bottom tabs-center tabs-simple custom-tabs-style-1">
                                        <ul class="nav nav-tabs">
                                            <li class="nav-item">
                                                <a class="nav-link active"
                                                    data-bind="attr: { href : '#tabsNavigation' + id + 'uses'}"
                                                    data-bs-toggle="tab"><span data-bind="html : tab1"></span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link"
                                                    data-bind="attr: { href : '#tabsNavigation' + id + 'benefits'}"
                                                    data-bs-toggle="tab"><span data-bind="html : tab2"></span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link"
                                                    data-bind="attr: { href : '#tabsNavigation' + id + 'instructions'}"
                                                    data-bs-toggle="tab"><span data-bind="html : tab3"></span></a>
                                            </li>
                                        </ul>
                                        <div class="tab-content">
                                            <div class="tab-pane active"
                                                data-bind="attr: { id : 'tabsNavigation' + id + 'uses'}">
                                                <ul data-bind="foreach: tab1data">
                                                    <li data-bind="html: $data"></li>
                                                </ul>
                                            </div>
                                            <div class="tab-pane"
                                                data-bind="attr: { id : 'tabsNavigation' + id + 'benefits'}">
                                                <ul data-bind="foreach: tab2data">
                                                    <li data-bind="html: $data"></li>
                                                </ul>
                                            </div>
                                            <div class="tab-pane"
                                                data-bind="attr: { id : 'tabsNavigation' + id + 'instructions'}">
                                                <ul data-bind="foreach: tab3data">
                                                    <li data-bind="html: $data"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <?php require('footer.php') ?>
    </div>

    <script src="vendor/plugins/js/plugins.min.js"></script>
    <script src="js/theme.js"></script>
    <script src="js/views/view.contact.js"></script>
    <script src="js/theme.init.js"></script>
    <script src="js/knockout-3.5.1.js"></script>
    <script src="js/view-products.js"></script>
    <script src="js/data.js"></script>
    <script>
        var products;
        let paramString = window.location.href.split('?')[1];
        let queryString = new URLSearchParams(paramString);
        if (queryString.has('id')) {
            for (let pair of queryString.entries()) {
                products = showAlert(pair[1]);
            }
        } else {
              products = showAlert(0);  
        }
        ko.applyBindings({
            products: products
        });
    </script>
</body>

</html>