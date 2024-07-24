const Link = ( props ) => {

    return(

        <a href={ href } aria-label={ aria_label } target="_blank" rel="noopener noreferrer">
            { props.children }
        </a>

    )

}

export default Link
