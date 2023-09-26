import auth from 'data/authData.json';
import DescInfoList from './DescInfoList';

const RegisterDescInfo = () => {
  return (
    <>
      <h1> {auth.register.title}</h1>

      <DescInfoList
        title={auth.register.helpInfo.title}
        list={auth.register.helpInfo.list}
      />

      <DescInfoList
        title={auth.register.moreInfo.title}
        list={auth.register.moreInfo.list}
      />
    </>
  );
};

export default RegisterDescInfo;
