import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import SideMenu from './components/SideMenu';

 export default function RootLayout(props: React.PropsWithChildren<unknown>) {
   return (
     <html lang="en">
       <body>
        <AppRouterCacheProvider>
           <SideMenu />
           {props.children}
        </AppRouterCacheProvider>
       </body>
     </html>
   );
 }
