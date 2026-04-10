"use client";

import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";

const FOOD_SECTIONS = [
  {
    heading: "Naturally Fresh",
    body: "Made with only the finest natural ingredients, our dishes are free from artificial preservatives and additives. Every bite feels as good as it tastes, giving you real, wholesome nourishment.",
  },
  {
    heading: "Light & Satisfying",
    body: "Enjoy bold, satisfying flavours without the guilt. Our portions are crafted to fuel your day — all the taste you crave with wholesome, balanced nutrition in every meal.",
  },
  {
    heading: "Gut-Friendly Goodness",
    body: "Our dishes are packed with fresh vegetables, lean proteins, and wholesome grains. Say goodbye to heavy processed meals and hello to a happy, healthy digestive system.",
  },
];

/**
 * Props for `AlternatingText`.
 */
export type AlternatingTextProps =
  SliceComponentProps<Content.AlternatingTextSlice>;

/**
 * Component for "AlternatingText" Slices.
 */
const AlternatingText = ({ slice }: AlternatingTextProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="alternating-text-container relative bg-slate-900 text-slate-100"
    >
      <div>
        <div className="relative z-[100] grid">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>

          {slice.primary.text_group.map((item, index) => {
            const section = FOOD_SECTIONS[index] ?? FOOD_SECTIONS[FOOD_SECTIONS.length - 1];
            return (
              <div
                key={index}
                className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
              >
                <div
                  className={clsx(
                    index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                    "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30",
                  )}
                >
                  <h2 className="text-balance text-6xl font-bold">
                    {section.heading}
                  </h2>
                  <div className="mt-4 text-xl">
                    <p>{section.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
