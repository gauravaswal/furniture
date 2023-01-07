
const Sidebar = (props) => {
    return (
        <>
            <div className="sidebar-block">
                <div className="title-block">Categories</div>
                <div className="block-content">
                    {props?.category?.length ? props.category.map(item => {
                        const name = item?.name.replace(/\s+/g, '');
                        const CustomTag = `#${name}`;
                        return <div className="cateTitle hasSubCategory open level1">
                            <span className="arrow collapse-icons collapsed" data-toggle="collapse" data-target={CustomTag}>
                                <i className="zmdi zmdi-minus"></i>
                                <i className="zmdi zmdi-plus"></i>
                            </span>
                            <a className="cateItem" href="#">{item.name}</a>
                            <div className="subCategory collapse" id={name} aria-expanded="true" role="status">
                                {item?.subCategory?.map(subCat => {
                                    return <div className="cateTitle">
                                        <a href="#" className="cateItem">{subCat?.name}</a>
                                    </div>
                                })}
                            </div>
                        </div>
                    }) : ""}

                </div>
            </div>


        </>
    )
}
export default Sidebar