
export const Apis = {
    Login: `${process.env.REACT_APP_API_URL}/v1/login`,
    Register: `${process.env.REACT_APP_API_URL}/v1/register`,
    Category: `${process.env.REACT_APP_API_URL_SERVICE}/category/list`,
    ProductList: `${process.env.REACT_APP_API_URL_SERVICE}/product/list`,
    ProductView: `${process.env.REACT_APP_API_URL_SERVICE}/product/view`,
    SubCategoryList:`${process.env.REACT_APP_API_URL_SERVICE}/subcategory/all-list`,
    CategorySubcategory:`${process.env.REACT_APP_API_URL_SERVICE}/category/all-list`

}   
