


import { useNavigate } from "react-router-dom";
import { Home, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { HiChevronDoubleLeft } from "react-icons/hi";

export default function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
            <div className="max-w-md w-full text-center space-y-8">
                {/* Icon/Illustration Area */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <span className="text-[12rem] font-bold text-primary select-none">404</span>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="p-6 bg-blue-50 rounded-full">
                            <AlertCircle className="w-20 h-20 text-primary" />
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                    <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                        Page Not Found
                    </h1>
                    <p className="text-lg text-gray-600">
                        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button
                    as={Link}
                    to="/"
                    variant="primary"
                    size="lg"
                    icon={Home}>
                       Go to Home
                </Button>

                    <Button
                        onClick={() => navigate(-1)}
                        variant="primary" 
                        size="lg"
                        iconAfter={HiChevronDoubleLeft}>
                       Go Back
                    </Button>
                </div>
            </div>

            {/* Subtle bottom text or branding */}
            <div className="mt-16 text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} NextTech. All rights reserved.
            </div>
        </div>
    );
}