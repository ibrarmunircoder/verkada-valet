import { OrgHeader } from '@/app/shared/components/OrgHeader';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <OrgHeader />
      {children}
    </>
  );
};
export default Layout;
