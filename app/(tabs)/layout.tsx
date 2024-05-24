import TabBar from "@/components/tabBar";

const TabLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <TabBar />
    </div>
  );
};

export default TabLayout;
