import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import Song from "../entity/Songlist";

export default class CreateSongList implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const SongList = [
      {
        title: "귀뚜라미",
        iconImg: "https://i.imgur.com/74yfFhN.png",
        soundFile: "https://www.komma.link/sounds/cricket.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "기차",
        iconImg: "https://i.imgur.com/JES9Yhh.png",
        soundFile: "https://www.komma.link/sounds/train.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "낙엽",
        iconImg: "https://i.imgur.com/HnZDCjb.png",
        soundFile: "https://www.komma.link/sounds/leaves.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "도시",
        iconImg: "https://i.imgur.com/ClsCVDW.png",
        soundFile: "https://www.komma.link/sounds/city.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "보글보글",
        iconImg: "https://i.imgur.com/WyPSnld.png",
        soundFile: "https://www.komma.link/sounds/bubble.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "비행기",
        iconImg: "https://i.imgur.com/nuEi93q.png",
        soundFile: "https://www.komma.link/sounds/airplane.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "세탁기",
        iconImg: "https://i.imgur.com/3pU0OMh.png",
        soundFile: "https://www.komma.link/sounds/washer.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "시골밤",
        iconImg: "https://i.imgur.com/lWziGz2.png",
        soundFile: "https://www.komma.link/sounds/country.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "심해",
        iconImg: "https://i.imgur.com/nG59YQq.png",
        soundFile: "https://www.komma.link/sounds/deepsea.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "연필",
        iconImg: "https://i.imgur.com/taXU5VD.png",
        soundFile: "https://www.komma.link/sounds/pencil.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "열대우림",
        iconImg: "https://i.imgur.com/UezlQge.png",
        soundFile: "https://www.komma.link/sounds/jungle.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "우산속비",
        iconImg: "https://i.imgur.com/95VnNXx.png",
        soundFile: "https://www.komma.link/sounds/tent_rain.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "우주",
        iconImg: "https://i.imgur.com/9QvGPCY.png",
        soundFile: "https://www.komma.link/sounds/space.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "장작",
        iconImg: "https://i.imgur.com/hiMe7BV.png",
        soundFile: "https://www.komma.link/sounds/firewood.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "책",
        iconImg: "https://i.imgur.com/IDhr3MR.png",
        soundFile: "https://www.komma.link/sounds/book.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "카페",
        iconImg: "https://i.imgur.com/RYe9umH.png",
        soundFile: "https://www.komma.link/sounds/cafe.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "파도",
        iconImg: "https://i.imgur.com/iHRwLhb.png",
        soundFile: "https://www.komma.link/sounds/sunrise_sea.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "갈매기",
        iconImg: "https://i.imgur.com/fEMbGe7.png",
        soundFile: "https://www.komma.link/sounds/galmagi.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "대나무",
        iconImg: "https://i.imgur.com/smrwxqW.png",
        soundFile: "https://www.komma.link/sounds/tree.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "매미",
        iconImg: "https://i.imgur.com/xLdYxZL.png",
        soundFile: "https://www.komma.link/sounds/mami.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "보리밭",
        iconImg: "https://i.imgur.com/cVQSduZ.png",
        soundFile: "https://www.komma.link/sounds/bori.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "새",
        iconImg: "https://i.imgur.com/SY25WVq.png",
        soundFile: "https://www.komma.link/sounds/bird.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "교회",
        iconImg: "https://i.imgur.com/ixbmiS3.png",
        soundFile: "https://www.komma.link/sounds/church.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "숲속",
        iconImg: "https://i.imgur.com/ei2cFAK.png",
        soundFile: "https://www.komma.link/sounds/forest.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "종",
        iconImg: "https://i.imgur.com/vkUgljs.png",
        soundFile: "https://www.komma.link/sounds/bell.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "타자",
        iconImg: "https://i.imgur.com/CUHNW2H.png",
        soundFile: "https://www.komma.link/sounds/typing.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "풀벌레",
        iconImg: "https://i.imgur.com/a8jLvQs.png",
        soundFile: "https://www.komma.link/sounds/bug.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "비",
        iconImg: "https://i.imgur.com/80XYaTr.png",
        soundFile: "https://www.komma.link/sounds/rain.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "눈",
        iconImg: "https://i.imgur.com/rN16LCI.png",
        soundFile: "https://www.komma.link/sounds/snow.mp3",
        defaultVolume: 0.4,
      },
      {
        title: "계곡",
        iconImg: "https://i.imgur.com/GHivueF.png",
        soundFile: "https://www.komma.link/sounds/valley.mp3",
        defaultVolume: 0.4,
      },
    ];
    await connection.getRepository(Song).save(SongList);
  }
}
