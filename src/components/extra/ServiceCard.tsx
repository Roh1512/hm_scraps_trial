import React, { memo } from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="card card-compact bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer rounded-lg overflow-hidden h-full flex flex-col">
      <figure className="h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body p-5 text-center flex-grow flex flex-col justify-between">
        <h2 className="text-2xl font-semibold text-primary mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default memo(ServiceCard);
