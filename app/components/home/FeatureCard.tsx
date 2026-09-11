interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  details: string;
}

const FeatureCard = ({ icon, title, details }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{details}</p>
    </div>
  );
};

export default FeatureCard;
