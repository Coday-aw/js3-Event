import Header from "./_components/header";

function EventLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
export default EventLayout;
