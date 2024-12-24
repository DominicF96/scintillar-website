import React from "react";
import { LucideIcon } from "lucide-react";
import "./feature-avatar.scss";

type Props = {
  icon: LucideIcon;
};

function FeatureAvatar({ icon: Icon }: Props) {
  return (
    <div className="feature-avatar">
      <Icon strokeWidth={1}/>
    </div>
  );
}

export default FeatureAvatar;
