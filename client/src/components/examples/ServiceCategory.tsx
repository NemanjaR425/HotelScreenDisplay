import ServiceCategory from '../ServiceCategory';

export default function ServiceCategoryExample() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-lg">
      <ServiceCategory category="dining" title="Dining" />
      <ServiceCategory category="shopping" title="Shopping" />
      <ServiceCategory category="excursions" title="Excursions" />
      <ServiceCategory category="entertainment" title="Entertainment" />
      <ServiceCategory category="spa" title="Spa" className="col-span-2" />
    </div>
  );
}