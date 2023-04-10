import { Box, Heading, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function SingleProducts() {
    const router = useRouter();

    const collectionArr = [
        {
            query: "Gifts",
            title: "GIFTS",
            image: "/Images/Products/Gifts_banner.webp",
            para1:
                "Taza's intense, pure, and seriously satisfying stone ground chocolate makes for the perfect gift for any occasion, from celebrating a special day to showing gratitude. Unique and striking packaging makes your gift memorable.",
            para2:
                "If you are looking to send 10 or more gifts to separate addresses, as tokens of appreciation or to connect with your remote team, please reach out to the Taza Corporate Gifts Team at corporategifts@tazachocolate.com or call 617-623-0804 x2.  If fewer than 10 gifts are needed, your best bet is to order here on our website.",
        },
        {
            query: "Chocolate_Bars",
            title: "CHOCOLATE BARS",
            image: "/Images/Products/Bars_banner.webp",
            para1:
                "Our Chocolate Bars take stone ground chocolate to another dimension by mixing incredible flavor combinations into our minimally processed, bold chocolate.",
            para2:
                "Never run out of your favorites! Subscribe & Save 10%. Change, skip or cancel anytime.",
        },
        {
            query: "Chocolate_Discs",
            title: "CHOCOLATE DISCS",
            image: "/Images/Products/Discs_banner.webp",
            para1:
                "Inspired by our passion for Mexican chocolate traditions, we hand-carve granite millstones to make these rustic, organic dark Mexican style chocolate discs bursting with bright tastes and gloriously gritty textures.",
            para2:
                "Never run out of your favorites! Subscribe & Save 10%. Change, skip or cancel anytime.",
        },
        {
            query: "Chocolate_Snacks",
            title: "CHOCOLATE SNACKS",
            image: "/Images/Products/Snacks_banner.webp",
            para1:
                "Taza Chocolate snacks pair organic, stone ground dark chocolate with nutrition-packed superfood ingredients like almonds, coconut, and crispy puffed quinoa. Feel good about your snacks!",
            para2: "",
        },
        {
            title: "SMOOTH & CRUNCHY BARS",
            image: "/Images/Products/Smooth_Crunchy_BARS_banner.webp",
            para1:
                "Our NEW Smooth & Crunchy bars pair silky smooth 70% dark chocolate with lots of irresistibly crunchy mix-ins!",
            para2: "",
        },
    ];

    let appendData = collectionArr.filter((item) => item.query === router.query.id);
    return (
        <Box>
            <Heading as="h1">
                {" "}
                <Link href="/collections">Back Collections</Link>
            </Heading>
            <Heading as="h1"> {router.query.id}</Heading>
            {
                appendData && appendData.map((item, index) => (

                    <Image key={index} src={item.image} alt={item.image} />
                ))
            }
        </Box>
    );
}
