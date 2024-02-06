interface ProjectTitleProps {
  label: string;
}

export default function ProjectTitle({ label }: ProjectTitleProps) {
  return <h1 className="">{label}</h1>;
}
