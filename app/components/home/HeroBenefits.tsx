interface HeroBenefitsProps {
  icon: React.ReactNode;
  title: string;
}

const HeroBenefits = ({ icon, title }: HeroBenefitsProps) => {
  return (
    <span className="flex items-center gap-1.5">
      {icon}
      {title}
    </span>
  );
};

export default HeroBenefits;
