import libEmptyData from 'data/libEmptyData';

const LibraryEmptyInfo = () => {
  return (
    <ul>
      {libEmptyData.steps.map(({ stepNumber, title, icon, descr }) => (
        <li key={stepNumber}>
          <p>{stepNumber}</p>
          <h3>
            <span>{icon}</span>
            {title}
          </h3>
          <p>
            <span>{libEmptyData.icon}</span>
            {descr}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default LibraryEmptyInfo;
