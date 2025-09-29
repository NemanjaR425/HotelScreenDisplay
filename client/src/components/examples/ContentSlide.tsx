import ContentSlide from '../ContentSlide';

export default function ContentSlideExample() {
  return (
    <ContentSlide isActive={true}>
      <div className="bg-card rounded-xl p-8 border border-card-border">
        <h3 className="text-2xl font-medium text-card-foreground mb-4">Sample Content Slide</h3>
        <p className="text-muted-foreground">
          This is an example of how content appears within a slide container with smooth transitions.
        </p>
      </div>
    </ContentSlide>
  );
}