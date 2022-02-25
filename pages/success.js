import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Success = () => {
    const router = useRouter();
    return (
        <div className="bg-gray-100 h-screen">
            <main className="max-w-screen-lg mx-auto">
                <div className="flex flex-col p-10 bg-white">
                    <div className="flex items-start space-x-2 mb-5">
                        <CheckCircleIcon className="text-green-500 h-10" />
                        <h1 className="text-3xl">Yeh! your order has been confirmed</h1>
                    </div>
                    <p className="mb-3">
                       Thank you for shopping with us. We'll send a confirmation  once your item has shipped, if you would like to check the status of your orders, press the link below.
                    </p>
                    <button onClick={()=>router.push("/")} className="bg-green-500 text-white font-semibold py-1 rounded">Go to your orders</button>
                </div>
            </main>
        </div>
    )
}

export default Success;