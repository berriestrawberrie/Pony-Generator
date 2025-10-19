import React from "react";
import { Image } from "./Image";

export const Pony = ({
  sex,
  breed,
  trait_hair,
  trait_body,
  trait_leg,
  trait_face,
}) => {
  const uncolorFace = ["trait_vulpine"];
  const uncolorBody = ["trait_paint"];
  const uncolorLeg = ["trait_stocking"];
  const uncolorHair = ["trait_rainbow"];
  let storedH = "";
  let storedF = "";
  let storedB = "";
  let storedL = "";

  //REMOVE COLORED IMAGE IF IT'S UNCOLORED
  if (uncolorFace.includes(trait_face)) {
    storedF = trait_face;
    trait_face = "";
  }
  if (uncolorBody.includes(trait_body)) {
    storedB = trait_body;
    trait_body = "";
  }
  if (uncolorLeg.includes(trait_leg)) {
    storedL = trait_leg;
    trait_leg = "";
  }
  if (uncolorHair.includes(trait_hair)) {
    storedH = trait_hair;
    trait_hair = "";
  }
  return (
    <>
      <Image inclass="body" breed={breed} sex={sex} img="base" />
      <Image inclass="hair" breed={breed} sex={sex} img="hair" />
      <Image inclass="trait_hair" breed={breed} sex={sex} img={trait_hair} />
      {uncolorHair.includes(storedH) ? (
        <Image breed={breed} sex={sex} img={storedH} />
      ) : (
        ""
      )}
      <Image inclass="accent" breed={breed} sex={sex} img="accent" />
      <Image inclass="accent2" breed={breed} sex={sex} img="accent2" />
      <Image inclass="trait_body" breed={breed} sex={sex} img={trait_body} />
      {uncolorBody.includes(storedB) ? (
        <Image breed={breed} sex={sex} img={storedB} />
      ) : (
        ""
      )}
      <Image inclass="trait_leg" breed={breed} sex={sex} img={trait_leg} />
      {uncolorLeg.includes(storedL) ? (
        <Image breed={breed} sex={sex} img={storedL} />
      ) : (
        ""
      )}
      <Image inclass="trait_face" breed={breed} sex={sex} img={trait_face} />
      {uncolorFace.includes(storedF) ? (
        <Image breed={breed} sex={sex} img={storedF} />
      ) : (
        ""
      )}
      <Image breed={breed} sex={sex} img="mask" />
      <Image breed={breed} sex={sex} img="shade" />
      <Image breed={breed} sex={sex} img="white" />
      <Image inclass="eye" breed={breed} sex={sex} img="eye" />
      <Image breed={breed} sex={sex} img="ink" />
    </>
  );
};
