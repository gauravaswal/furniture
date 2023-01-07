const MenuRight = ()=>{
    return (
        <>
          <div id="mobile-pagemenu" className="mobile-boxpage d-flex hidden-md-up active d-md-none">
        <div className="content-boxpage col">
            <div className="box-header d-flex justify-content-between align-items-center">
                <div className="title-box">Menu</div>
                <div className="close-box">Close</div>
            </div>
            <div className="box-content">
                <nav>
                    <div id="megamenu" className="clearfix">
                        <ul className="menu level1">
                            <li className="item home-page has-sub">
                                <span className="arrow collapsed" data-toggle="collapse" data-target="#home1" aria-expanded="true" role="status">
                                    <i className="zmdi zmdi-minus"></i>
                                    <i className="zmdi zmdi-plus"></i>
                                </span>
                                <a href="index-2.html" title="Home">
                                    <i className="fa fa-home" aria-hidden="true"></i>Home</a>
                                <div className="subCategory collapse" id="home1" aria-expanded="true" role="status">
                                    <ul>
                                        <li className="item">
                                            <a href="index-2.html" title="Home Page 1">Home Page 1</a>
                                        </li>
                                        <li className="item">
                                            <a href="home2.html" title="Home Page 2">Home Page 2</a>
                                        </li>
                                        <li className="item">
                                            <a href="home3.html" title="Home Page 3">Home Page 3</a>
                                        </li>
                                        <li className="item">
                                            <a href="home4.html" title="Home Page 4">Home Page 4</a>
                                        </li>
                                        <li className="item">
                                            <a href="home5.html" title="Home Page 5">Home Page 5</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item has-sub">
                                <span className="arrow collapsed" data-toggle="collapse" data-target="#blog" aria-expanded="false" role="status">
                                    <i className="zmdi zmdi-minus"></i>
                                    <i className="zmdi zmdi-plus"></i>
                                </span>
                                <a href="#" title="Blog">
                                    <i className="fa fa-address-book" aria-hidden="true"></i>Blog</a>

                                <div className="subCategory collapse" id="blog" aria-expanded="true" role="status">
                                    <ul>
                                        <li className="item">
                                            <a href="blog-list-sidebar-left.html" title="Blog List (Sidebar Left)">Blog List (Sidebar Left)</a>
                                        </li>
                                        <li className="item">
                                            <a href="blog-list-sidebar-left2.html" title="Blog List (Sidebar Left) 2">Blog List (Sidebar Left) 2</a>
                                        </li>
                                        <li className="item">
                                            <a href="blog-list-sidebar-right.html" title="Category Blog (Right column)">Blog List (Sidebar Right)</a>
                                        </li>
                                        <li className="item">
                                            <a href="blog-list-no-sidebar.html" title="Blog List (No Sidebar)">Blog List (No Sidebar)</a>
                                        </li>
                                        <li className="item">
                                            <a href="blog-grid-no-sidebar.html" title="Blog Grid (No Sidebar)">Blog Grid (No Sidebar)</a>
                                        </li>
                                        <li className="item">
                                            <a href="blog-detail.html" title="Blog Detail">Blog Detail</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item group has-sub">
                                <span className="arrow collapsed" data-toggle="collapse" data-target="#page" aria-expanded="false" role="status">
                                    <i className="zmdi zmdi-minus"></i>
                                    <i className="zmdi zmdi-plus"></i>
                                </span>
                                <a href="#" title="Page">
                                    <i className="fa fa-file-text-o" aria-hidden="true"></i>page</a>
                                <div className="subCategory collapse" id="page" aria-expanded="true" role="status">
                                    <ul className="group-page">
                                        <li className="item container group">
                                            <div>
                                                <ul>
                                                    <li className="item col-md-4 ">
                                                        <span className="menu-title">Category Style</span>
                                                        <div className="menu-content">
                                                            <ul className="col">
                                                                <li>
                                                                    <a href="product-grid-sidebar-left.html">Product Grid (Sidebar Left)</a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-grid-sidebar-right.html">Product Grid (Sidebar Right)</a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-list-sidebar-left.html">Product List (Sidebar Left) </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="item col-md-4 html">
                                                        <span className="menu-title">Product Detail Style</span>
                                                        <div className="menu-content">
                                                            <ul>
                                                                <li>
                                                                    <a href="product-detail.html">Product Detail (Sidebar Left)</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Product Detail (Sidebar Right)</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="item col-md-4 html">
                                                        <span className="menu-title">Bonus Page</span>
                                                        <div className="menu-content">
                                                            <ul>
                                                                <li>
                                                                    <a href="404.html">404 Page</a>
                                                                </li>
                                                                <li>
                                                                    <a href="about-us.html">About Us Page</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item has-sub">
                                <a href="contact.html" title="Contact us">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>Contact us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>

        
        </>

    )
}
export default MenuRight