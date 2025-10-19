import React from "react";

function handleHairColor() {
  const elements = document.querySelectorAll(".trait_hair");
  elements.forEach((el) => {
    el.style.filter = "none";
  });
}

export const Traits = ({
  setHairTrait,
  setFaceTrait,
  setBodyTrait,
  setLegTrait,
}) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="mt-4 flex flex-wrap  gap-2 rounded-2xl">
          {/*HAIR TRAIT*/}
          <div className="bg-amber-400 p-1 border border-amber-950 rounded-lg">
            <select
              className="bg-cyan-100  text-sm border p-[2px] border-amber-950 rounded-md"
              id="trait_hair"
              name="trait_hair"
              onChange={(event) => {
                setHairTrait(event.target.value);
              }}
            >
              <option value="">Hair Trait</option>
              <option value="trait_streak">Streak</option>
              <option value="trait_rainbow">Rainbow</option>
              <option value="trait_hfade">Fade</option>
            </select>
          </div>
          {/*END OF HAIR TRAIT*/}
          {/*FACE TRAIT*/}
          <div className="bg-amber-400 p-1 border border-amber-950 rounded-lg">
            <select
              className="bg-cyan-100  text-sm border p-[2px] border-amber-950 rounded-md"
              id="trait_face"
              name="trait_face"
              onChange={(event) => {
                setFaceTrait(event.target.value);
              }}
            >
              <option value="">Face Trait</option>
              <option value="trait_blaze">Blaze</option>
              <option value="trait_ffade">Face Fade</option>
              <option value="trait_vulpine">Vulpine</option>
            </select>
          </div>
          {/*END OF HAIR TRAIT*/}
          {/*BODY TRAIT*/}
          <div className="bg-amber-400 p-1 border border-amber-950 rounded-lg">
            <select
              className="bg-cyan-100 text-sm border p-[2px] border-amber-950 rounded-md"
              id="trait_body"
              name="trait_body"
              onChange={(event) => {
                setBodyTrait(event.target.value);
              }}
            >
              <option value="">Body Trait</option>
              <option value="trait_paint">Paint</option>
              <option value="trait_belly">Belly</option>
              <option value="trait_underbelly">Under Belly</option>
            </select>
          </div>
          {/*END OF BODY TRAIT*/}
          {/*LEG TRAIT*/}
          <div className="bg-amber-400 p-1 border border-amber-950 rounded-lg">
            <select
              className="bg-cyan-100 text-sm border p-[2px] border-amber-950 rounded-md"
              id="trait_leg"
              name="trait_leg"
              onChange={(event) => {
                setLegTrait(event.target.value);
              }}
            >
              <option value="">Leg Trait</option>
              <option value="trait_stocking">Stocking</option>
            </select>
          </div>
          {/*END OF LEG TRAIT*/}
        </div>
      </div>
    </>
  );
};
