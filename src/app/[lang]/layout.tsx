import { RootLayoutProps } from "@/src/types";
import { NextIntlClientProvider } from "next-intl";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialMediaLinks from "../components/SocialMediaLinks";

export default async function RootLayout({ children, params }: RootLayoutProps) {
    const lang = (await params).lang
    const messages = (await import(`../../../translation/${lang}.json`)).default;

    return (
        <html lang={lang}>
            <body
                className={`${lang == "ar" ? "font-arabic" : "font-english"} overflow-x-hidden`}
                dir={lang == "ar" ? "rtl" : "ltr"}
            >
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <div className="relative md:-mt-[148px] w-full flex md:flex-col flex-col-reverse bg-white dark:bg-primaryDark">
                        <SocialMediaLinks />
                        {children}
                    </div>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
