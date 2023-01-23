import ContentLoader from 'react-content-loader';
export const DogSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="238" y="86" rx="2" ry="2" width="144" height="11" />
      <rect x="239" y="108" rx="2" ry="2" width="140" height="10" />
      <rect x="17" y="57" rx="2" ry="2" width="199" height="223" />
      <rect x="239" y="134" rx="2" ry="2" width="140" height="10" />
    </ContentLoader>
  );
};
