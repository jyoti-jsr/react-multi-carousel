import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function CrouselComponent() {
  const data = [
    {
      description: "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
      headline: "w3js.com - web front-end studio",
      image:
        "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      description:
        "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
      headline: "w3js.com - web front-end studio",
      image:
        "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      description: "React Carousel with Server Side Rendering Support – Part 1",
      headline: "w3js.com - web front-end studio",
      image:
        "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    }
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div
      style={{
        paddingBottom: "30px",
        position: "relative"
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay={true}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={true}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data.map((item) => (
          <div style={{ height: "200px" }}>
            <img src={item.image} height="100%" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
