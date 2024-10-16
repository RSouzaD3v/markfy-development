import { SignedIn, UserButton } from "@clerk/nextjs";
import { HomeIcon, FileIcon } from "@radix-ui/react-icons"
import { Book, Users, Share2, CreditCard } from "lucide-react";
import Image from "next/image";

const featured = [
    {
        title: "Home",
        icon: <HomeIcon className="text-white" width={30} height={30}/>,
        link: "/home"
    },
    {
        title: "Campanhas",
        icon: <Book className="text-white" width={30} height={30}/>,
        link: "/campanhas"
    },
    {
        title: "Documentos",
        icon: <FileIcon className="text-white" width={30} height={30}/>,
        link: "/documentos"
    },
    {
        title: "Clientes",
        icon: <Users className="text-white" width={30} height={30}/>,
        link: "/clientes"
    }
];

const userless = [
    {
        title: "Integrações",
        icon: <Share2 className="text-white" width={30} height={30}/>,
        link: "/integrations"
    },
    {
        title: "Assinatura",
        icon: <CreditCard className="text-white" width={30} height={30}/>,
        link: "/assinatura"
    }
]


const Sidebar = () => {
    return (
        <div className="w-[90px] p-[10px] h-screen flex flex-col justify-between items-center">
            <div>
                <div className="my-2 mb-5">
                    <Image width={50} height={50} src={"/logo.png"} alt="logo" />
                </div>

                <div className="my-3">
                    <ul className="w-[50px] p-2 bg-red-500 flex items-center flex-col justify-center rounded-3xl">                        
                        {featured.map((v, i) => (
                            <li className="my-3" key={i}><a href={v.link}>{v.icon}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className="w-[50px] p-2 bg-red-500 flex items-center flex-col justify-center rounded-3xl">                        
                        {userless.map((v, i) => (
                            <li className="my-3" key={i}><a href={v.link}>{v.icon}</a></li>
                        ))}
                    </ul>
                </div>
            </div>


            <div className="bg-black/20 w-[50px] h-[50px] 
            rounded-full flex items-center justify-center">
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
};

export default Sidebar;