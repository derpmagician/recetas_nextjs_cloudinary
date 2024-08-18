// hooks/useNavigation.ts

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const useNavigation = () => {
 const [loading, setLoading] = useState(false);
 const [open, setOpen] = useState(false);
 const [active, setActive] = useState('');
 const router = useRouter();
 const params = useParams();
 const searchParams = useSearchParams();
 const pathname = usePathname();

 return {
   open,
   setOpen,
   active,
   setActive,
   pathname,
   params,
   router,
   searchParams,
   loading,
   setLoading
 }
}