import router, { useRouter } from "next/router";

type ActiveLink = {
  children: any;
  href: string;
  style: string;
};

function ActiveLink({ children, href, style }: ActiveLink) {
  const router = useRouter();
  // const style = {
  //   marginRight: 10,
  //   color: router.asPath === href ? 'red' : 'black',
  // }

  const handleClick = (event: any): void => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
