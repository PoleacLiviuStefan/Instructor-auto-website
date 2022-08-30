import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
const About = () => {
  return (
    <div className="absolute flex items-center flex-col lg:top-[80rem] top-[100rem] w-full md:h-[30rem] h-[77rem]  bg-slate-800 text-white bg-opacity-30 ">
      <Slide top delay={400}>
        <div className="relative flex top-10 w-full  flex-col items-center">
          <h2
            name="About"
            className="md:text-4xl text-2xl font-sans font-bold "
          >
            Despre Mine
          </h2>
          <span className="relative md:w-[10rem] w-[6rem] h-[2px] bg-sky-600 top-4" />
        </div>
      </Slide>
      <Fade delay={400}>
        <p className="relative top-24 lg:w-[70rem] w-[80%] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          rhoncus justo in tristique accumsan. Integer vehicula, eros vitae
          viverra interdum, turpis leo gravida lectus, quis semper magna arcu
          efficitur lacus. Mauris et scelerisque erat. In vitae pretium massa,
          eget sollicitudin leo. Quisque tempor vitae tellus eget aliquet. Sed
          volutpat at lacus semper tempus. Aliquam suscipit venenatis euismod.
          Maecenas vitae ligula est. Etiam cursus sollicitudin mauris quis
          consequat. In porttitor non purus a laoreet. Phasellus sagittis sem
          mi, varius euismod ligula laoreet at. Nulla ultricies eros purus, nec
          ultrices nisi varius et. Vivamus id consectetur nulla. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Nunc laoreet et nulla a aliquet. Nullam sit amet enim
          pharetra, gravida ex ut, consectetur felis. Sed dignissim, nisl et
          dictum pharetra, enim nibh egestas felis, quis fermentum turpis urna
          sed orci. Duis ut molestie nisi, quis molestie mi. Etiam sodales lorem
          lacus, a convallis orci aliquam sit amet. Nullam placerat posuere
          sodales. In iaculis, nulla eget sollicitudin interdum, tortor elit
          vehicula mauris, ac faucibus mi mauris ac magna. Phasellus eu sem
          cursus, ornare arcu vel, iaculis risus. Nulla sit amet tellus non nisl
          faucibus volutpat quis vitae dui. In venenatis tellus.
        </p>
      </Fade>
    </div>
  );
};

export default About;
