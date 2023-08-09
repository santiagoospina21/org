import "./myOrg.styles.css";

const MyOrg = ({ handlerForm }) => {
  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img src="/img/add.svg" alt="add" onClick={handlerForm} />
    </section>
  );
};

export default MyOrg;
