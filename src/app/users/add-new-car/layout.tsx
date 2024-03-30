import { UsersHeader } from '@/app/shared/components/UsersHeader';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <UsersHeader />
      {children}
    </>
  );
};
export default Layout;
