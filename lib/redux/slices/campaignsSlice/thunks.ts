import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { CampaignModel } from "@/types/campaignModel";

export const fetchCampaigns = createAppAsyncThunk(
  "campaigns/fetchCampaigns",
  async () => {
    // Simulates an API call
    await new Promise((r) => setTimeout(r, 2000));
    var campaigns: CampaignModel[] = [
      {
        title: "Classic senge og skabe",
        url: "/campaigns/classic-senge-og-skabe",
        badge: { text: "August 2022 - september 2022" },
        backgroundImage:
          "https://sengetid.dk/media/catalog/product/cache/eaa1d903325b224346f30e018c0f4cad/s/i/sig_delux_bosoxseng_dobbelt_1_1_1.jpg",
      },
      {
        title: "Wally pusleborde",
        url: "/campaigns/wally-pusleborde",
        badge: { text: "Oktober 2022", icon: "images/hourglass.svg" },
        backgroundImage:
          "https://barnevognshuset.dk/cdn/shop/files/550010-77_Leander_Wally-cappuccino-tuv-sud.jpg?v=1705072547&width=2048",
      },
      {
        title: "Alle tekstiler",
        url: "/campaigns/alle-tekstiler",
        badge: { text: "December 2022", icon: "images/hourglass.svg" },
        backgroundImage:
          "https://engholmtextiles.dk/wp-content/uploads/2021/02/DSC_0354-1080x675.jpg",
      },
      {
        title: "Retro senge",
        url: "/campaigns/retro-senge",
        badge: { text: "Oktober 2022 - november 2022" },
        backgroundImage:
          "https://www.livingoodies.dk/cdn/shop/products/Bella-velour-sengegavl-160-170-180-190-200-210-cm_7fd7b862-2bba-42ee-900f-98964006315e.jpg?v=1660133872",
      },
    ];
    return campaigns;
  },
);