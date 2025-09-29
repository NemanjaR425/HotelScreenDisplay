import ServiceCategory from '../ServiceCategory';

export default function ServiceCategoryExample() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-lg">
      <ServiceCategory category="dining" />
      <ServiceCategory category="shopping" />
      <ServiceCategory category="excursions" />
      <ServiceCategory category="entertainment" />
      <ServiceCategory category="spa" className="col-span-2" />
    </div>
  );
}