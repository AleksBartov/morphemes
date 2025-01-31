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
];

export const WORDS_FOR_TEST = shuffle(allWords);
