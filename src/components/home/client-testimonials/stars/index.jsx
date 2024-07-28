const stars = () => {

    {
        let stars = []
        for ( let i = 0; i < 5; i++ ) {
            stars.push( 
                    <img 
                        alt="star_icon" 
                        class="size-5" 
                        src="/icon/star-yellow.svg"
                    />

            );
        }

        return stars;
    
    };
}

export default stars;
