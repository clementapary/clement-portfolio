import { MotionProps } from "motion/react";

export type BlockProps = {
  className?: string;
} & MotionProps;

export type ServiceProps = {
  title: string;
  servies: ServiceProps;
  tool?: string;
};
export type SkillProps = {
  title: string;
  skills: SkillProps;
};
