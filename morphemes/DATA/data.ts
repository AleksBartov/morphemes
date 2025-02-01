import { RightShape } from "@/components/Word";

export interface TestedWord {
  word: string;
  rightAnswer: RightShape[];
  length: number;
}

const shuffle = (array: TestedWord[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const allWords: TestedWord[] = [
  {
    word: "АВГУСТ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 6 }],
    length: 6,
  },
  {
    word: "АВТОБУС",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 7 }],
    length: 7,
  },
  {
    word: "АДРЕС",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "АДРЕСОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "АИСТ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 4 }],
    length: 4,
  },
  {
    word: "АИСТЁНОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 4 },
    ],
    length: 8,
  },
  {
    word: "АКУЛА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "АЛЕНЬКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "suff", position: 2, shapeLength: 4 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "АЛФАВИТ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 7 }],
    length: 7,
  },
  {
    word: "АЛЬБОМ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 6 }],
    length: 6,
  },
  {
    word: "АНГЕЛ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "АНТЕННА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "АПРЕЛЬ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 6 }],
    length: 6,
  },
  {
    word: "АПТЕКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "АРБУЗ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "АРБУЗИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "БАБА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "БАБУЛЯ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "БАБУШКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "БАГАЖ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "БАГАЖНИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 3 },
    ],
    length: 8,
  },
  {
    word: "БАЛ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 3 }],
    length: 3,
  },
  {
    word: "БАЛЕТ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "БАЛЕТНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "БАНАН",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "БАНКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "БАНОЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "БАРАН",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "БАРАШЕК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "БАТОН",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "БАТОНЧИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 3 },
    ],
    length: 8,
  },
  {
    word: "БАШМАК",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 6 }],
    length: 6,
  },
  {
    word: "БАШМАЧНИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 3 },
    ],
    length: 9,
  },
  {
    word: "БАШМАЧОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "БЕГАЮ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "БЕГЕМОТИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 7 },
      { name: "suff", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "БЕГЛЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "БЕГОМ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "БЕГОТНЯ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "БЕГУН",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "БЕГУНЬЯ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "БЕДА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "БЕДНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "БЕЗДЕЛЬНИК",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 3 },
      { name: "root", position: 3, shapeLength: 4 },
      { name: "suff", position: 7, shapeLength: 3 },
    ],
    length: 10,
  },
  {
    word: "БЕЛЕНЬКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "БЕЛОВАТЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "БЕЛЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "БЕРЕГ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "БЕРЕГОВОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "БЕРЕЖНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "БЕРЕЖОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "БЕРЁЗА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "БЕРЁЗКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "БЕС",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 3 }],
    length: 3,
  },
  {
    word: "БЕСЕДА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "БЕСЕДКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "БЕСПОКОЙНЫЙ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 3 },
      { name: "root", position: 3, shapeLength: 5 },
      { name: "suff", position: 8, shapeLength: 1 },
      { name: "ending", position: 9, shapeLength: 2 },
    ],
    length: 11,
  },
  {
    word: "БЕСПОЛЕЗНЫЙ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 3 },
      { name: "root", position: 3, shapeLength: 5 },
      { name: "suff", position: 8, shapeLength: 1 },
      { name: "ending", position: 9, shapeLength: 2 },
    ],
    length: 11,
  },
  {
    word: "БЕССТЫДНИК",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 3 },
      { name: "root", position: 3, shapeLength: 4 },
      { name: "suff", position: 7, shapeLength: 3 },
    ],
    length: 10,
  },
  {
    word: "БЕССТЫЖИЙ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 3 },
      { name: "root", position: 3, shapeLength: 4 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "БИЛЕТ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "БЛИЖАЙШИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "БЛИЖЕ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "БЛИЖНИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 1 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "БЛИЗЕХОНЬКО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 6 },
      { name: "ending", position: 10, shapeLength: 1 },
    ],
    length: 11,
  },
  {
    word: "БЛИЗОСТЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 4 },
    ],
    length: 8,
  },
  {
    word: "БОБЁР",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "БОБРЁНОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 4 },
    ],
    length: 8,
  },
  {
    word: "БОБРИХА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "БОБРОВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "БОГАТЕЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "БОГАТЕНЬКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 4 },
      { name: "ending", position: 9, shapeLength: 2 },
    ],
    length: 11,
  },
  {
    word: "БОГАТСТВО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 3 },
      { name: "ending", position: 8, shapeLength: 1 },
    ],
    length: 9,
  },
  {
    word: "БОГАТЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "БОКОВОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "БОЛЕЗНЬ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 7 }],
    length: 7,
  },
  {
    word: "БОЛОТО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "БОЛОТЦЕ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "БОЛТЛИВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "БОЛТОВНЯ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "БОЛТУН",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "БОЛЬ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 4 }],
    length: 4,
  },
  {
    word: "БОЛЬНИЦА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "БОЛЬНОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 1 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "БОЛЬШОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "БОЛЬШУЩИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "БОЛЯЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "БОРОДА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "БОРОДАТЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "БОРОДЁНКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 3 },
      { name: "ending", position: 8, shapeLength: 1 },
    ],
    length: 9,
  },
  {
    word: "БОТИНОК",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 7 }],
    length: 7,
  },
  {
    word: "БОТИНОЧЕК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 7 },
      { name: "suff", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "БОЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "БОЧОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "БОЧОНОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
    ],
    length: 7,
  },
  {
    word: "БРАТЕЦ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "БРАТИШКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "БРАТСКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "БРАТСТВО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "БРЕВНО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "БРЁВНЫШКО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 3 },
      { name: "ending", position: 8, shapeLength: 1 },
    ],
    length: 9,
  },
  {
    word: "БРОД",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
    ],
    length: 4,
  },
  {
    word: "БРОДЯГА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 1,
      },
    ],
    length: 7,
  },
  {
    word: "БРОДЯЧИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 2,
      },
    ],
    length: 8,
  },
  {
    word: "БРУСНИКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 1,
      },
    ],
    length: 8,
  },
  {
    word: "БУКВА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 1,
      },
    ],
    length: 5,
  },
  {
    word: "БУКВАРЬ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 3,
      },
    ],
    length: 7,
  },
  {
    word: "БУКВЕННЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 2,
      },
    ],
    length: 9,
  },
  {
    word: "БУКОВКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 1,
      },
    ],
    length: 7,
  },
  {
    word: "БУЛАВКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 6,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 1,
      },
    ],
    length: 7,
  },
  {
    word: "БУЛКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 1,
      },
    ],
    length: 5,
  },
  {
    word: "БУЛОЧНАЯ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 2,
      },
    ],
    length: 8,
  },
  {
    word: "БУЛОЧНИК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 3,
      },
    ],
    length: 8,
  },
  {
    word: "БУМАГА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 1,
      },
    ],
    length: 6,
  },
  {
    word: "БУМАЖКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 1,
      },
    ],
    length: 7,
  },
  {
    word: "БУМАЖНИК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 3,
      },
    ],
    length: 8,
  },
  {
    word: "БУМАЖНЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 2,
      },
    ],
    length: 8,
  },
  {
    word: "БУСИНА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 1,
      },
    ],
    length: 6,
  },
  {
    word: "БУСЫ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 3,
        shapeLength: 1,
      },
    ],
    length: 4,
  },
  {
    word: "БЫК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
    ],
    length: 3,
  },
  {
    word: "БЫСТРО",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 1,
      },
    ],
    length: 6,
  },
  {
    word: "БЫСТРЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ВАГОН",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
    ],
    length: 5,
  },
  {
    word: "ВАГОНЧИК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 3,
      },
    ],
    length: 8,
  },
  {
    word: "ВАЛЕНОК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 4,
      },
    ],
    length: 7,
  },
  {
    word: "ВАННА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 1,
      },
    ],
    length: 5,
  },
  {
    word: "ВАРЁНЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ВАРЕНЬЕ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 1,
      },
    ],
    length: 7,
  },
  {
    word: "ВБИТЬ",
    rightAnswer: [
      {
        name: "preroot",
        position: 0,
        shapeLength: 1,
      },
      {
        name: "root",
        position: 1,
        shapeLength: 2,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 2,
      },
    ],
    length: 5,
  },
  {
    word: "ВВЕРХ",
    rightAnswer: [
      {
        name: "preroot",
        position: 0,
        shapeLength: 1,
      },
      {
        name: "root",
        position: 1,
        shapeLength: 4,
      },
    ],
    length: 5,
  },
  {
    word: "ВВЕСТИ",
    rightAnswer: [
      {
        name: "preroot",
        position: 0,
        shapeLength: 1,
      },
      {
        name: "root",
        position: 1,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
  {
    word: "ВЕК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
    ],
    length: 3,
  },
  {
    word: "ВЕКОВОЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ВЕЛИКАН",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ВЕЛИКИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ВЕЛИЧИЕ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 1,
      },
    ],
    length: 7,
  },
  {
    word: "ВЕЛИЧИНА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 1,
      },
    ],
    length: 8,
  },
  {
    word: "ВЕРХНИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ВЕРХУШКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 1,
      },
    ],
    length: 8,
  },
  {
    word: "ВЕРШИНА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 1,
      },
    ],
    length: 7,
  },
  {
    word: "ВЕСЁЛЕНЬКИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 4,
      },
      {
        name: "ending",
        position: 9,
        shapeLength: 2,
      },
    ],
    length: 11,
  },
  {
    word: "ВЕСЕЛЬЧАК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 6,
      },
      {
        name: "suff",
        position: 6,
        shapeLength: 3,
      },
    ],
    length: 9,
  },
  {
    word: "ВЕСЕННИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 2,
      },
    ],
    length: 8,
  },
  {
    word: "ВЕСНА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 1,
      },
    ],
    length: 5,
  },
  {
    word: "ВЕСНУШКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 1,
      },
    ],
    length: 8,
  },
  {
    word: "ВЕТВИСТЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 2,
      },
    ],
    length: 9,
  },
  {
    word: "ВЕТЕР",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
    ],
    length: 5,
  },
  {
    word: "ВЕТЕРОК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ВЕТКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 1,
      },
    ],
    length: 5,
  },
  {
    word: "ВЕТОЧКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 1,
      },
    ],
    length: 7,
  },
  {
    word: "ВЕТРЕНЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 2,
      },
    ],
    length: 8,
  },
  {
    word: "ВЕЧЕР",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
    ],
    length: 5,
  },
  {
    word: "ВЕЧЕРНИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 2,
      },
    ],
    length: 8,
  },
  {
    word: "ВЕЧЕРОК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ВЕЧНЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
  {
    word: "ВЗРОСЛЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 6,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 2,
      },
    ],
    length: 8,
  },
  {
    word: "ВОДА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 3,
        shapeLength: 1,
      },
    ],
    length: 4,
  },
  {
    word: "ВОДНЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
  {
    word: "ВОДЯНОЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ВОЗОК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 2,
      },
    ],
    length: 5,
  },
  {
    word: "ВОКЗАЛ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 6,
      },
    ],
    length: 6,
  },
  {
    word: "ВОКЗАЛЬНЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 7,
      },
      {
        name: "suff",
        position: 7,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 8,
        shapeLength: 2,
      },
    ],
    length: 10,
  },
  {
    word: "ВОЛК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
    ],
    length: 4,
  },
  {
    word: "ВОЛНА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 1,
      },
    ],
    length: 5,
  },
  {
    word: "ВОЛНИСТЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 2,
      },
    ],
    length: 9,
  },
  {
    word: "ВОЛОС",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
    ],
    length: 5,
  },
  {
    word: "ВОЛОСАТЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 2,
      },
    ],
    length: 9,
  },
  {
    word: "ВОЛОСОК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ВОЛОСЯНОЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 2,
      },
    ],
    length: 9,
  },
  {
    word: "ВОЛЧИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
  {
    word: "ВОЛЧИЦА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 1,
      },
    ],
    length: 7,
  },
  {
    word: "ВОЛЧОНОК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 4,
      },
    ],
    length: 8,
  },
  {
    word: "ВОЛШЕБСТВО",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 6,
      },
      {
        name: "suff",
        position: 6,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 9,
        shapeLength: 1,
      },
    ],
    length: 10,
  },
  {
    word: "ВОРОБЕЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ВОРОБУШЕК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 4,
      },
    ],
    length: 9,
  },
  {
    word: "ВОРОН",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
    ],
    length: 5,
  },
  {
    word: "ВОРОНЁНОК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 4,
      },
    ],
    length: 9,
  },
  {
    word: "ВОСТОК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 6,
      },
    ],
    length: 6,
  },
  {
    word: "ВОСТОЧНЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 6,
      },
      {
        name: "suff",
        position: 6,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 2,
      },
    ],
    length: 9,
  },
  {
    word: "ВСПЛЫТЬ",
    rightAnswer: [
      {
        name: "preroot",
        position: 0,
        shapeLength: 2,
      },
      {
        name: "root",
        position: 2,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ВЧЕРА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
    ],
    length: 5,
  },
  {
    word: "ВЧЕРАШНИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 2,
      },
    ],
    length: 9,
  },
  {
    word: "ВЫБИТЬ",
    rightAnswer: [
      {
        name: "preroot",
        position: 0,
        shapeLength: 2,
      },
      {
        name: "root",
        position: 2,
        shapeLength: 2,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
  {
    word: "ВЫЖАТЬ",
    rightAnswer: [
      {
        name: "preroot",
        position: 0,
        shapeLength: 2,
      },
      {
        name: "root",
        position: 2,
        shapeLength: 2,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
  {
    word: "ВЫПЕЧЕННЫЙ",
    rightAnswer: [
      {
        name: "preroot",
        position: 0,
        shapeLength: 2,
      },
      {
        name: "root",
        position: 2,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 8,
        shapeLength: 2,
      },
    ],
    length: 10,
  },
  {
    word: "ВЫПЕЧКА",
    rightAnswer: [
      {
        name: "preroot",
        position: 0,
        shapeLength: 2,
      },
      {
        name: "root",
        position: 2,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 1,
      },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ВЫПИТЬ",
    rightAnswer: [
      {
        name: "preroot",
        position: 0,
        shapeLength: 2,
      },
      {
        name: "root",
        position: 2,
        shapeLength: 2,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
  {
    word: "ВЫПЛЫТЬ",
    rightAnswer: [
      {
        name: "preroot",
        position: 0,
        shapeLength: 2,
      },
      {
        name: "root",
        position: 2,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ВЫПОЛЗТИ",
    rightAnswer: [
      {
        name: "preroot",
        position: 0,
        shapeLength: 2,
      },
      {
        name: "root",
        position: 2,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 6,
        shapeLength: 2,
      },
    ],
    length: 8,
  },
  {
    word: "ВЫСОКИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ВЫСОТА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 1,
      },
    ],
    length: 6,
  },
  {
    word: "ВЫШИНА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 1,
      },
    ],
    length: 6,
  },
  {
    word: "ВЫШКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 1,
      },
    ],
    length: 5,
  },
  {
    word: "ГАЗЕТА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 1,
      },
    ],
    length: 6,
  },
  {
    word: "ГАЗЕТЕНКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 8,
        shapeLength: 1,
      },
    ],
    length: 9,
  },
  {
    word: "ГАЗЕТЧИК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 3,
      },
    ],
    length: 8,
  },
  {
    word: "ГАЗОВЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ГАРМОНИЯ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 6,
      },
      {
        name: "suff",
        position: 6,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 1,
      },
    ],
    length: 8,
  },
  {
    word: "ГЕРОЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
    ],
    length: 5,
  },
  {
    word: "ГЛАВА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 1,
      },
    ],
    length: 5,
  },
  {
    word: "ГЛАВКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 1,
      },
    ],
    length: 6,
  },
  {
    word: "ГЛАВНЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ГЛАЗ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
    ],
    length: 4,
  },
  {
    word: "ГЛАЗАСТЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 2,
      },
    ],
    length: 9,
  },
  {
    word: "ГЛАЗЕНКИ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 1,
      },
    ],
    length: 8,
  },
  {
    word: "ГЛАЗИК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
  {
    word: "ГЛАЗИЩЕ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 1,
      },
    ],
    length: 7,
  },
  {
    word: "ГЛАЗКИ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 1,
      },
    ],
    length: 6,
  },
  {
    word: "ГЛАЗНОЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ГЛАЗОК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
  {
    word: "ГЛУБИНА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 1,
      },
    ],
    length: 7,
  },
  {
    word: "ГЛУБОКИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 2,
      },
    ],
    length: 8,
  },
  {
    word: "ГЛУПЕНЬКИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 4,
      },
      {
        name: "ending",
        position: 8,
        shapeLength: 2,
      },
    ],
    length: 10,
  },
  {
    word: "ГЛУПЕЦ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
  {
    word: "ГЛУПОСТЬ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 4,
      },
    ],
    length: 8,
  },
  {
    word: "ГЛУПЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
  {
    word: "ГЛУПЫШ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
  {
    word: "ГНОМ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
    ],
    length: 4,
  },
  {
    word: "ГНОМИК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
  {
    word: "ГОВОР",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
    ],
    length: 5,
  },
  {
    word: "ГОВОРЛИВЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 8,
        shapeLength: 2,
      },
    ],
    length: 10,
  },
  {
    word: "ГОВОРУН",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ГОД",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
    ],
    length: 3,
  },
  {
    word: "ГОДИК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 2,
      },
    ],
    length: 5,
  },
  {
    word: "ГОДИЧНЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 2,
      },
    ],
    length: 8,
  },
  {
    word: "ГОЛОВА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 1,
      },
    ],
    length: 6,
  },
  {
    word: "ГОЛОВЕШКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 8,
        shapeLength: 1,
      },
    ],
    length: 9,
  },
  {
    word: "ГОЛОВКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 1,
      },
    ],
    length: 7,
  },
  {
    word: "ГОЛОВУШКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 8,
        shapeLength: 1,
      },
    ],
    length: 9,
  },
  {
    word: "ГОЛУБИНЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 2,
      },
    ],
    length: 9,
  },
  {
    word: "ГОЛУБОК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ГОЛУБЬ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 6,
      },
    ],
    length: 6,
  },
  {
    word: "ГОЛУБЯТНЯ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 8,
        shapeLength: 1,
      },
    ],
    length: 9,
  },
  {
    word: "ГОРА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 3,
        shapeLength: 1,
      },
    ],
    length: 4,
  },
  {
    word: "ГОРИЗОНТ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 8,
      },
    ],
    length: 8,
  },
  {
    word: "ГОРИЗОНТАЛЬ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 8,
      },
      {
        name: "suff",
        position: 8,
        shapeLength: 3,
      },
    ],
    length: 11,
  },
  {
    word: "ГОРЛАСТЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 2,
      },
    ],
    length: 9,
  },
  {
    word: "ГОРЛО",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 1,
      },
    ],
    length: 5,
  },
  {
    word: "ГОРЛЫШКО",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 1,
      },
    ],
    length: 8,
  },
  {
    word: "ГОРНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      {
        name: "suff",
        position: 3,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
  {
    word: "ГОРОД",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
    ],
    length: 5,
  },
  {
    word: "ГОРОДИШКО",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 8,
        shapeLength: 1,
      },
    ],
    length: 9,
  },
  {
    word: "ГОРОДОК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ГОРОДСКОЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 2,
      },
    ],
    length: 9,
  },
  {
    word: "ГОРОЖАНИН",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 4,
      },
    ],
    length: 9,
  },
  {
    word: "ГОРОХ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
    ],
    length: 5,
  },
  {
    word: "ГОРОХОВЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 2,
      },
    ],
    length: 9,
  },
  {
    word: "ГОРОШИНА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 1,
      },
    ],
    length: 8,
  },
  {
    word: "ГРОЗА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 1,
      },
    ],
    length: 5,
  },
  {
    word: "ГРОЗНЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ГРУСТИНКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 8,
        shapeLength: 1,
      },
    ],
    length: 9,
  },
  {
    word: "ГРУСТНЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      {
        name: "suff",
        position: 5,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 2,
      },
    ],
    length: 8,
  },
  {
    word: "ГРУСТЬ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 6,
      },
    ],
    length: 6,
  },
  {
    word: "ГРЯЗЕВОЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 2,
      },
    ],
    length: 8,
  },
  {
    word: "ГРЯЗИЩА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 1,
      },
    ],
    length: 7,
  },
  {
    word: "ГРЯЗНЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ГРЯЗЬ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
    ],
    length: 5,
  },
  {
    word: "ГУБА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 3,
        shapeLength: 1,
      },
    ],
    length: 4,
  },
  {
    word: "ГУБАСТЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 6,
        shapeLength: 2,
      },
    ],
    length: 8,
  },
  {
    word: "ГУБКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 1,
      },
    ],
    length: 5,
  },
  {
    word: "ГУСЕНИЦА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 7,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 1,
      },
    ],
    length: 8,
  },
  {
    word: "ГУСЁНОК",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 4,
      },
    ],
    length: 7,
  },
  {
    word: "ГУСИНЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ГУСЫНЯ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 1,
      },
    ],
    length: 6,
  },
  {
    word: "ДАВНИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "ending",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
  {
    word: "ДАВНИШНИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 7,
        shapeLength: 2,
      },
    ],
    length: 9,
  },
  {
    word: "ДАЛЁКИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "suff",
        position: 3,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ДАЛЬНИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 1,
      },
      {
        name: "ending",
        position: 5,
        shapeLength: 2,
      },
    ],
    length: 7,
  },
  {
    word: "ДВОРЕЦ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 4,
      },
      {
        name: "suff",
        position: 4,
        shapeLength: 2,
      },
    ],
    length: 6,
  },
];

export const WORDS_FOR_TEST = shuffle(allWords);
