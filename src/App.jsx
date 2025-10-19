import { useState } from "react";
import { Image } from "./component/Image";
import { Colors } from "./component/Colors";
import { Pony } from "./component/Pony";
import { Gender } from "./component/Nav/Gender";
import { Links } from "./component/Nav/Links";
import logo from "../src/assets/images/my.png";
import { Traits } from "./component/Traits";

import "./App.css";

function App() {
  const [sex, setSex] = useState(true);
  const [breed, setBreed] = useState("unicorn");
  const [age, setAge] = useState("adult");
  const [terms, setTerms] = useState(false);
  const [hairTrait, setHairTrait] = useState("");
  const [faceTrait, setFaceTrait] = useState("");
  const [bodyTrait, setBodyTrait] = useState("");
  const [legTrait, setLegTrait] = useState("");

  return (
    <>
      <div className="border mb-3 border-amber-950  rounded-2xl w-[322px] h-[266.5px] md:w-[602px] md:h-[486.3px] relative">
        <div className="w-full absolute -top-[30px] right-[25px] z-99">
          <span
            className=" capitalize text-xs tracking-widest font-bold text-white underline underline-offset-4"
            onClick={() => setTerms(!terms)}
          >
            Terms.of.Use
          </span>
        </div>
        {/*TERMS OF SERVICE */}
        <div
          className={
            terms
              ? "z-11 w-full h-full rounded-2xl bg-white absolute top-0 overflow-auto p-2"
              : "hidden"
          }
        >
          <b>Terms of Use:</b>
          <p>
            All images are designed and created by me. You can generate a
            character and use it however you would like. You{" "}
            <span className="underline decoration-double font-medium">can</span>{" "}
            change the lineart, add to the image and alter it in any way.{" "}
          </p>
          <b>Can I use the image other places?</b>{" "}
          <p>
            Absolutely, this is a project I'm undertaking because I enjoy pony
            games and want to share with as many people as possible! I would
            appreciate linking back to the generator, but it is not necessary.
          </p>
          <b>Can I download the Image?</b>
          <p>
            Unfortunately at this current time downloading the generated images
            is not available.
          </p>
          <b>Will there be more options?</b>
          <p>
            Yes! There will be patterns and more breeds in the future :D so stay
            tuned.
          </p>
        </div>
        {/*BREED SELECTER */}
        <div className="relative flex flex-col md:flex-row gap-4">
          <div className="absolute flex -top-10 right-0 gap-2 items-center">
            <label>Breed: </label>
            <div className=" bg-amber-400 p-1 border border-amber-950 rounded-lg">
              <select
                className="bg-cyan-100 text-sm border border-amber-950 rounded-md"
                onChange={(e) => setBreed(e.target.value)}
              >
                <option value="unicorn">Unicorn</option>
                <option value="dragon">Dragon</option>
                <option value="avian">Avian</option>
                <option value="kittling">Kittling</option>
              </select>
            </div>
          </div>
          {/*GENDER CHANGER */}
          <Gender
            sex={sex}
            clicked={() => {
              setSex(!sex);
            }}
          />
          <img
            className="float z-10 absolute w-[150px] -top-14 -left-8  md:-top-25 md:-left-15 md:w-[240px]"
            src={logo}
          />
          {/*PONY IMAGE GENERATION */}
          <div className="border-8 border-amber-400 rounded-2xl bg-white/50 relative  w-[320.5px] h-[265px] md:w-[600px] md:h-[484.5px]">
            <div className="border border-amber-950  rounded-lg w-[305px] h-[250px] md:w-[585px] md:h-[470px]">
              <Pony
                sex={sex ? "female" : "male"}
                breed={breed}
                trait_hair={hairTrait}
                trait_body={bodyTrait}
                trait_leg={legTrait}
                trait_face={faceTrait}
              />
            </div>
          </div>
          {/*COLOR INPUTS */}
          <Colors />
        </div>
        {/*SPECIAL TRAIT OPTIONS */}
        <Traits
          setHairTrait={setHairTrait}
          setBodyTrait={setBodyTrait}
          setFaceTrait={setFaceTrait}
          setLegTrait={setLegTrait}
        />
        {/*SOCIAL MEDIA LINKS */}
        <div className="flex justify-end p-2 text-2xl text-white">
          <Links />
        </div>
      </div>
    </>
  );
}

export default App;
