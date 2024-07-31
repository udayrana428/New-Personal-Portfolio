import React,{useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import Profile from "../assets/images/profile2.jpeg"

const ImageCarousels = (props) => {
    const [index, setIndex] = useState(0);

    const [Profile, setProfile] = useState('')

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    useEffect(() => {
      setProfile(props.singleProject.image)
    }, [])
    

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img src={Profile && Profile.toLowerCase() === 'no image' ? 'https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/project-2.jpg' : Profile} alt="First image" srcSet="" />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Profile} alt="First image" srcSet="" />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Profile} alt="First image" srcSet="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Profile} alt="First image" srcSet="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Profile} alt="First image" srcSet="" />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default ImageCarousels