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
  {
    word: "ДОМИК",
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
    word: "ДОМИШКО",
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
    word: "ДОМОВОЙ",
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
    word: "ДОПИТЬ",
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
    word: "ДОСКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "ДОСОЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ДОСУГ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "ДОСУЖИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ДОЧЕНЬКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "ДОЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "ДОЧУРКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ДОШКОЛЬНИК",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 5 },
      { name: "suff", position: 7, shapeLength: 3 },
    ],
    length: 10,
  },
  {
    word: "ДОШКОЛЬНЫЙ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 5 },
      { name: "suff", position: 7, shapeLength: 1 },
      { name: "ending", position: 8, shapeLength: 2 },
    ],
    length: 10,
  },
  {
    word: "ДОЩАТЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ДОЩЕЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ДРАКОНИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "ДРАКОНЧИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 3 },
    ],
    length: 9,
  },
  {
    word: "ДРОЗД",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "ДРОЗДОВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "ДРУГ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 4 }],
    length: 4,
  },
  {
    word: "ДРУЖБА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 1 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "ДРУЖЕСКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "ДРУЖИЩЕ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ДРУЖНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 1 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ДРУЖОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ДУБ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 3 }],
    length: 3,
  },
  {
    word: "ДУБОВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ДУБОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "ДУША",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "ДУШЕВНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "ДУШЕНЬКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "ДУШОНКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ЕДА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "ending", position: 2, shapeLength: 1 },
    ],
    length: 3,
  },
  {
    word: "ЕДИНИЦА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ЕДИНСТВО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "ЕДКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "suff", position: 2, shapeLength: 1 },
      { name: "ending", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "ЁЖИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "suff", position: 2, shapeLength: 2 },
    ],
    length: 4,
  },
  {
    word: "ЕЖИХА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "suff", position: 2, shapeLength: 2 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "ЕЖОВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "suff", position: 2, shapeLength: 2 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЕЖОНОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "suff", position: 2, shapeLength: 4 },
    ],
    length: 6,
  },
  {
    word: "ЕЗДА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "ДВОРИК",
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
    word: "ДВОРОВЫЙ",
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
    word: "ДЕВИЦА",
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
    word: "ДЕВИЧИЙ",
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
    word: "ДЕВОЧКА",
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
    word: "ДЕВУШКА",
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
    word: "ДЕВЧАТА",
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
    word: "ДЕДУЛЯ",
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
    word: "ДЕДУШКА",
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
    word: "ДЕЖУРНЫЙ",
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
    word: "ДЕЖУРСТВО",
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
    word: "ДЕКАБРЬ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 7,
      },
    ],
    length: 7,
  },
  {
    word: "ДЕЛИШКИ",
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
    word: "ДЕЛО",
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
    word: "ДЕЛОВИТЫЙ",
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
      {
        name: "ending",
        position: 7,
        shapeLength: 2,
      },
    ],
    length: 9,
  },
  {
    word: "ДЕЛОВОЙ",
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
    word: "ДЕЛЬНЫЙ",
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
    word: "ДЕНЕЖКА",
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
    word: "ДЕНЁК",
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
    word: "ДЕНЬГИ",
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
    word: "ДЕНЬЖАТА",
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
    word: "ДЕНЬЖОНКИ",
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
    word: "ДЕРЕВЕНСКИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 7,
      },
      {
        name: "suff",
        position: 7,
        shapeLength: 2,
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
    word: "ДЕРЕВЕНЬКА",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 8,
      },
      {
        name: "suff",
        position: 8,
        shapeLength: 1,
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
    word: "ДЕРЕВНЯ",
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
    word: "ДЕРЕВО",
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
    word: "ДЕРЕВУШКА",
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
    word: "ДЕРЕВЯННЫЙ",
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
    word: "ДЕРЕВЯШКА",
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
    word: "ДЕСЕРТ",
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
    word: "ДЕТЁНЫШ",
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
    word: "ДЕТИШКИ",
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
    word: "ДЕТИЩЕ",
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
    word: "ДЕТОЧКА",
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
    word: "ДЕТСКИЙ",
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
    word: "ДЕТСТВО",
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
    word: "ДЕШЕВИЗНА",
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
    word: "ДЕШЁВКА",
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
    word: "ДЕШЁВЫЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 5,
      },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ДИКАРЬ",
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
    ],
    length: 6,
  },
  {
    word: "ДИКИЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 3,
      },
      {
        name: "ending",
        position: 3,
        shapeLength: 2,
      },
    ],
    length: 5,
  },
  {
    word: "ДИКОВИНА",
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
      {
        name: "ending",
        position: 7,
        shapeLength: 1,
      },
    ],
    length: 8,
  },
  {
    word: "ДИКОСТЬ",
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
    word: "ДИКТАНТ",
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
    word: "ДИКТОР",
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
    word: "ДИКЦИЯ",
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
    word: "ДИПЛОМ",
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
    word: "ДИПЛОМНЫЙ",
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
    word: "ДНЕВНОЙ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 2,
      },
      {
        name: "suff",
        position: 2,
        shapeLength: 3,
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
    word: "ДНЁМ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 2,
      },
      {
        name: "suff",
        position: 2,
        shapeLength: 2,
      },
    ],
    length: 4,
  },
  {
    word: "ДНИЩЕ",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 2,
      },
      {
        name: "suff",
        position: 2,
        shapeLength: 2,
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
    word: "ДНО",
    rightAnswer: [
      {
        name: "root",
        position: 0,
        shapeLength: 2,
      },
      {
        name: "ending",
        position: 2,
        shapeLength: 1,
      },
    ],
    length: 3,
  },
  {
    word: "ДОГОВОР",
    rightAnswer: [
      {
        name: "preroot",
        position: 0,
        shapeLength: 2,
      },
      {
        name: "root",
        position: 2,
        shapeLength: 5,
      },
    ],
    length: 7,
  },
  {
    word: "ДОГОВОРНЫЙ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      {
        name: "root",
        position: 2,
        shapeLength: 5,
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
    word: "ДОЕСТЬ",
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
    word: "ДОЖДЕВОЙ",
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
    word: "ДОЖДИК",
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
    word: "ЁЛКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "suff", position: 2, shapeLength: 1 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "ЕЛОВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "suff", position: 2, shapeLength: 2 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЕЛЬНИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
    ],
    length: 6,
  },
  {
    word: "ЕНОТОВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "ЕСТЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "suff", position: 2, shapeLength: 2 },
    ],
    length: 4,
  },
  {
    word: "ЖАБА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "ЖАБЁНЫШ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
    ],
    length: 7,
  },
  {
    word: "ЖАБИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "ЖАВОРОНОК",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 9 }],
    length: 9,
  },
  {
    word: "ЖАДНОСТЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 4 },
    ],
    length: 8,
  },
  {
    word: "ЖАДНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЖАЖДА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "ЖАЖДУЩИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "ЖАЛКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЖАЛО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "ЖАЛОБА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "ЖАЛОСТЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
    ],
    length: 7,
  },
  {
    word: "ЖАРА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "ЖАРЕНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ЖАРИЩА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "ЖАРКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЖАТВА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "ЖЕЛАНИЕ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ЖЕЛАТЕЛЬНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 5 },
      { name: "ending", position: 9, shapeLength: 2 },
    ],
    length: 11,
  },
  {
    word: "ЖЕЛАТЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЖЕЛЕЗНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "ЖЕЛЕЗО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "ЖЕЛТОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЖЁЛУДЬ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 6 }],
    length: 6,
  },
  {
    word: "ЖЕНА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "ЖЕНАТЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ЖЕНИХ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "ЖЕНСКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ЖЁНУШКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ЖЕРЕБЁНОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 4 },
    ],
    length: 9,
  },
  {
    word: "ЖЕРЕБЕЦ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ЗАВТРАК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ЗАВТРАШНИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 2 },
      { name: "ending", position: 8, shapeLength: 2 },
    ],
    length: 10,
  },
  {
    word: "ЗАГАР",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 3 },
    ],
    length: 5,
  },
  {
    word: "ЗАДАННЫЙ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 2 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "ЗАДАЧА",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 2 },
      { name: "suff", position: 4, shapeLength: 1 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "ЗАЙКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "ЗАЙЧИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЗАЙЧИШКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "ЗАЙЧОНОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 4 },
    ],
    length: 8,
  },
  {
    word: "ЗАКАЗЧИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 3 },
    ],
    length: 8,
  },
  {
    word: "ЗАМОЧЕК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ЖИВНОСТЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 5 },
    ],
    length: 8,
  },
  {
    word: "ЖИВОТ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "ЖИВУЧИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ЖИЗНЕННЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "ЖИЛОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "suff", position: 2, shapeLength: 1 },
      { name: "ending", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "ЖИЛЬЁ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "suff", position: 2, shapeLength: 2 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "ЖИРНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЖИРОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "ЖИТЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "suff", position: 2, shapeLength: 2 },
    ],
    length: 4,
  },
  {
    word: "ЖУРАВЛЁНОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 4 },
    ],
    length: 10,
  },
  {
    word: "ЖУРАВЛИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "ЗАБИТЬ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 2 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЗАБОРИЩЕ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "ЗАБОРЧИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 3 },
    ],
    length: 8,
  },
  {
    word: "ЗАБОТА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "ЗАБОТЛИВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 3 },
      { name: "ending", position: 8, shapeLength: 2 },
    ],
    length: 10,
  },
  {
    word: "ЗАБРЕСТИ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 4 },
      { name: "suff", position: 6, shapeLength: 2 },
    ],
    length: 8, // Было исправлено с 6 на 8
  },
  {
    word: "ЗАВОДИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ЗАНЯТИЕ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 2 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ЗАПАД",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "ЗАПАДНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "ЗАПИТЬ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 2 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЗАПОЛЗТИ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 4 },
      { name: "suff", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "ЗАРОСЛИ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 3 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ЗАРОСШИЙ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 3 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "ЗАЯЦ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 4 }],
    length: 4,
  },
  {
    word: "ЗАЯЧИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЗВЕЗДА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "ЗВЁЗДНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "ЗЕЛЁНКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ЗЕЛЁНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ЗЕМЕЛЬНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 1 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "ЗЕМЛЯ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "ЗЕМЛЯНОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "ЗЕРКАЛО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ЗЕРКАЛЬЦЕ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 7 },
      { name: "suff", position: 7, shapeLength: 1 },
      { name: "ending", position: 8, shapeLength: 1 },
    ],
    length: 9,
  },
  {
    word: "ЗИМА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "ЗИМОВЬЕ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ЗИМУШКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ЗМЕЁНЫШ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
    ],
    length: 7,
  },
  {
    word: "ЗМЕЙКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 1 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "ЗОНТИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЗУБИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "ЗУБНОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЗУБОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "ИГРА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "ИГРОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "ИДТИ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "suff", position: 2, shapeLength: 2 },
    ],
    length: 4,
  },
  {
    word: "ИЗГОРОДЬ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 6 },
    ],
    length: 8,
  },
  {
    word: "ИЗДАВНА",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 4 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ИЗЖИТЬ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 2 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ИЛИСТЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "suff", position: 2, shapeLength: 3 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ИМЕЧКО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 },
      { name: "suff", position: 2, shapeLength: 3 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "ИНДЕЙКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ИНДЮШАЧИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "ИНДЮШКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ИНДЮШОНОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 4 },
    ],
    length: 9,
  },
  {
    word: "ИНЖЕНЕРНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 7 },
      { name: "suff", position: 7, shapeLength: 1 },
      { name: "ending", position: 8, shapeLength: 2 },
    ],
    length: 10,
  },
  {
    word: "ИНТЕРЕСНО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 7 },
      { name: "suff", position: 7, shapeLength: 1 },
      { name: "ending", position: 8, shapeLength: 1 },
    ],
    length: 9,
  },
  {
    word: "ИЮЛЬСКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "ИЮНЬСКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "КАПУСТА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "КАПУСТНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 1 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "КАРАНДАШИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 8 },
      { name: "suff", position: 8, shapeLength: 2 },
    ],
    length: 10,
  },
  {
    word: "КАРТА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "КАРТИНА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "КАРТИННЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 1 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "КАРТИНОЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 3 },
      { name: "ending", position: 9, shapeLength: 1 },
    ],
    length: 10,
  },
  {
    word: "КАРТОЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "КАРТОШЕЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 3 },
      { name: "ending", position: 9, shapeLength: 1 },
    ],
    length: 10,
  },
  {
    word: "КАРТОШКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 1 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "КВАДРАТИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 7 },
      { name: "suff", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "КВАДРАТНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 7 },
      { name: "suff", position: 7, shapeLength: 1 },
      { name: "ending", position: 8, shapeLength: 2 },
    ],
    length: 10,
  },
  {
    word: "КВАРТАЛЬНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 8 },
      { name: "suff", position: 8, shapeLength: 1 },
      { name: "ending", position: 9, shapeLength: 2 },
    ],
    length: 11,
  },
  {
    word: "КВАРТИРА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 7 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "КИПЯЩИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "КИСТОЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "КЛАСС",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "КЛАССНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "КЛАСТЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "КЛЕНОВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "КНИГА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "КНИЖЕЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "КНИЖНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 1 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "КНИЖОНКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "КОГОТОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "КОГОТЬ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 6 }],
    length: 6,
  },
  {
    word: "КОЗА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "КОЗЁЛ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "КОЛЕНКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "КОЛЕННЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "КОЛЕНО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "КОМАРИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "КОМАРИНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "КОМБАЙНЕР",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 7 },
      { name: "suff", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "КОМНАТКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 1 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "КОМНАТНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 1 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "КОМПОТ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 6 }],
    length: 6,
  },
  {
    word: "КОНЁК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "КОНЕЧНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "КОННЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "КОНЬКИ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "КОСТЕРОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "КОСТИСТЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "КОСТОЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "КОСТЯНОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "КОСТЯШКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "КОТЁНОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
    ],
    length: 7,
  },
  {
    word: "КОТИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "КОТИЩЕ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "КОШАЧИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "КОШКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "КРАСИВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "КРАСКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 1 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "КРАСОТА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "КРОЛЬЧИХА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 2 },
      { name: "ending", position: 8, shapeLength: 1 },
    ],
    length: 9,
  },
  {
    word: "КРУГЛЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 1 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "КРУЖОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "КРЫСА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "КРЫСЁНЫШ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 4 },
    ],
    length: 8,
  },
  {
    word: "КРЫСИНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "КУРИЦА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "КУРОЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "КУХНЯ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "ЛАПА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "ЛАПКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "ЛАПОЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ЛЕВША",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "ЛЕВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "ЛЕГКО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "ЛЁГКОСТЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 4 },
    ],
    length: 8,
  },
  {
    word: "ЛЕКАРСТВО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 8 },
      { name: "ending", position: 8, shapeLength: 1 },
    ],
    length: 9,
  },
  {
    word: "ЛЕНИВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ЛЕНТЯЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
    ],
    length: 6,
  },
  {
    word: "ЛЕСИСТЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "ЛЕСНОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЛЕТНИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЛИНЕЕЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "ЛИНЕЙКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ЛИНИЯ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "ЛИСИЦА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "ЛИСОНЬКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "ЛИСТИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЛИСТОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ЛИТЕРАТУРА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 7 },
      { name: "suff", position: 7, shapeLength: 2 },
      { name: "ending", position: 9, shapeLength: 1 },
    ],
    length: 10,
  },
  {
    word: "ЛОПАТА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "ЛОШАДЁНКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 3 },
      { name: "ending", position: 8, shapeLength: 1 },
    ],
    length: 9,
  },
  {
    word: "ЛОШАДИНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "ЛОШАДКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "ЛУГОВОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ЛУЖОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "ЛУКОВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ЛУЧОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "ЛЬВЁНОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
    ],
    length: 7,
  },
  {
    word: "ЛЬВИЦА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "ЛЯГУШАЧИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "ЛЯГУШОНОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 4 },
    ],
    length: 9,
  },
  {
    word: "МАГАЗИН",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 7 }],
    length: 7,
  },
  {
    word: "МАГАЗИНЧИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 7 },
      { name: "suff", position: 7, shapeLength: 3 },
    ],
    length: 10,
  },
  {
    word: "МАЙСКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "МАЛЕНЬКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "МАЛИНА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "МАЛИННИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 3 },
    ],
    length: 8,
  },
  {
    word: "МАЛИНОВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "МАЛО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "МАЛЮТКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "МАМА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "МАМАША",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "МАМКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "МАМОЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "МАМУЛЯ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "МАШИНКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "МАШИННЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "МАЯТНИК",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 7 }],
    length: 7,
  },
  {
    word: "МАЯЧОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "МГЛА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "МГЛИСТЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "МЕДВЕДИЦА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 2 },
      { name: "ending", position: 8, shapeLength: 1 },
    ],
    length: 9,
  },
  {
    word: "МЕДВЕЖИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "МЕДВЕЖОНОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 4 },
    ],
    length: 10,
  },
  {
    word: "МЕДЛЕННЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "МЕДОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "МЕЛКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "МЕЛЬНИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
    ],
    length: 7,
  },
  {
    word: "МЕЛЬНИЦА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "МЕСЯЦ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "МЕСЯЧНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "МЕТРОВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 2 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "МИНУТА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "МИНУТОЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 3 },
      { name: "ending", position: 8, shapeLength: 1 },
    ],
    length: 9,
  },
  {
    word: "МОДЕЛЬКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 1 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "МОЛОДЁЖЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 3 },
    ],
    length: 8,
  },
  {
    word: "МОЛОДЕЦ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "МОЛОДОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "МОЛОДОСТЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 4 },
    ],
    length: 9,
  },
  {
    word: "МОЛОКО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "МОЛОТОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "МОЛОЧКО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "МОЛОЧНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "МОРЕ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "МОРКОВКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 1 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "МОРКОВЬ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 7 }],
    length: 7,
  },
  {
    word: "МОРОЗ",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "МОРОЗЕЦ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "МОРОЗИЩЕ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "МОРОЗНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "МОРСКОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "МОРЯК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "МОТОРЧИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 3 },
    ],
    length: 8,
  },
  {
    word: "МУЖЕСТВО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "МУЖИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "МУЖСКОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "МУЖЧИНА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "МУЗЕЙНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "МУЗЫКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "МУЗЫКАНТ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 3 },
    ],
    length: 8,
  },
  {
    word: "МУРАВЬИШКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 3 },
      { name: "ending", position: 9, shapeLength: 1 },
    ],
    length: 10,
  },
  {
    word: "МЫШИНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "МЫШКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "МЫШОНОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
    ],
    length: 7,
  },
  {
    word: "МЯГКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "МЯГКО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "МЯГЧАЙШИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "НАБИТЬ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 2 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "НАДЕЖДА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "НАДЁЖНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "НАДЕТЫЙ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 2 },
      { name: "suff", position: 4, shapeLength: 1 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "НАЖАТЬ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 2 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "НАЛЕВО",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 3 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "НАПРАВО",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 4 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "НАРОДЕЦ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "НАРОДНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "НАУШНИК",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 2 },
      { name: "suff", position: 4, shapeLength: 3 },
    ],
    length: 7,
  },
  {
    word: "НАХОДКА",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 3 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "НАХОДЧИВЫЙ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 3 },
      { name: "suff", position: 5, shapeLength: 3 },
      { name: "ending", position: 8, shapeLength: 2 },
    ],
    length: 10,
  },
  {
    word: "НАЧАЛО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 1 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "НАЧАЛЬНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "НЕДЕЛЬКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 },
      { name: "suff", position: 6, shapeLength: 1 },
      { name: "ending", position: 7, shapeLength: 1 },
    ],
    length: 8,
  },
  {
    word: "НЕСТИ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "НИЗЕНЬКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "НИЗИНА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "НИЗОСТЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
    ],
    length: 7,
  },
  {
    word: "НОВЕНЬКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "НОВИНКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
      { name: "ending", position: 6, shapeLength: 1 },
    ],
    length: 7,
  },
  {
    word: "НОВОСТЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 4 },
    ],
    length: 7,
  },
  {
    word: "НОВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "НОГА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "ending", position: 3, shapeLength: 1 },
    ],
    length: 4,
  },
  {
    word: "НОГОТОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "НОЖКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "НОЛИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "НОРКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "НОСИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
    ],
    length: 5,
  },
  {
    word: "НОСИЩЕ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 1 },
    ],
    length: 6,
  },
  {
    word: "НОСОК",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 5 }],
    length: 5,
  },
  {
    word: "НОСОЧЕК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 },
      { name: "suff", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "НОЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "НОЧНИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 3 },
    ],
    length: 6,
  },
  {
    word: "НОЧНОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 1 },
      { name: "ending", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "НУЛЕВОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 },
      { name: "suff", position: 3, shapeLength: 2 },
      { name: "ending", position: 5, shapeLength: 2 },
    ],
    length: 7,
  },
  {
    word: "ОБЕДЕННЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "suff", position: 4, shapeLength: 3 },
      { name: "ending", position: 7, shapeLength: 2 },
    ],
    length: 9,
  },
  {
    word: "ОБЖИТЬ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 },
      { name: "root", position: 2, shapeLength: 2 },
      { name: "suff", position: 4, shapeLength: 2 },
    ],
    length: 6,
  },
  {
    word: "ОБЛАЧНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ОБЛАЧ"
      { name: "suff", position: 5, shapeLength: 1 }, // "Н"
      { name: "ending", position: 6, shapeLength: 2 }, // "ЫЙ"
    ],
    length: 8,
  },
  {
    word: "ОБНОВА",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 }, // "ОБ"
      { name: "root", position: 2, shapeLength: 3 }, // "НОВ"
      { name: "ending", position: 5, shapeLength: 1 }, // "А"
    ],
    length: 6,
  },
  {
    word: "ОБНОВКА",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 }, // "ОБ"
      { name: "root", position: 2, shapeLength: 3 }, // "НОВ"
      { name: "suff", position: 5, shapeLength: 1 }, // "К"
      { name: "ending", position: 6, shapeLength: 1 }, // "А"
    ],
    length: 7,
  },
  {
    word: "ОБРАЗНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ОБРАЗ"
      { name: "suff", position: 5, shapeLength: 1 }, // "Н"
      { name: "ending", position: 6, shapeLength: 2 }, // "ЫЙ"
    ],
    length: 8,
  },
  {
    word: "ОБРАЗОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ОБРАЗ"
      { name: "suff", position: 5, shapeLength: 2 }, // "ОК"
    ],
    length: 7,
  },
  {
    word: "ОБРАСТИ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 }, // "ОБ"
      { name: "root", position: 2, shapeLength: 3 }, // "РАС"
      { name: "suff", position: 5, shapeLength: 2 }, // "ТИ"
    ],
    length: 7,
  },
  {
    word: "ОВЕЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ОВЕЧ"
      { name: "suff", position: 4, shapeLength: 1 }, // "К"
      { name: "ending", position: 5, shapeLength: 1 }, // "А"
    ],
    length: 6,
  },
  {
    word: "ОВСЯНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 }, // "ОВС"
      { name: "suff", position: 3, shapeLength: 2 }, // "ЯН"
      { name: "ending", position: 5, shapeLength: 2 }, // "ЫЙ"
    ],
    length: 7,
  },
  {
    word: "ОГОРОД",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 }, // "ОГОРОД"
    ],
    length: 6,
  },
  {
    word: "ОГУРЕЦ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 }, // "ОГУРЕЦ"
    ],
    length: 6,
  },
  {
    word: "ОГУРЧИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ОГУР"
      { name: "suff", position: 5, shapeLength: 2 }, // "ЧИК"
    ],
    length: 7,
  },
  {
    word: "ОДЕЖДА",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 1 }, // "О"
      { name: "root", position: 1, shapeLength: 4 }, // "ДЕЖД"
      { name: "ending", position: 5, shapeLength: 1 }, // "А"
    ],
    length: 6,
  },
  {
    word: "ОДЕЖОНКА",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 1 }, // "О"
      { name: "root", position: 1, shapeLength: 3 }, // "ДЕЖ"
      { name: "suff", position: 4, shapeLength: 3 }, // "ОНК"
      { name: "ending", position: 7, shapeLength: 1 }, // "А"
    ],
    length: 8,
  },
  {
    word: "ОДИНОКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ОДИН"
      { name: "suff", position: 4, shapeLength: 2 }, // "ОК"
      { name: "ending", position: 6, shapeLength: 2 }, // "ИЙ"
    ],
    length: 8,
  },
  {
    word: "ОКРАС",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 1 }, // "О"
      { name: "root", position: 1, shapeLength: 4 }, // "КРАС"
    ],
    length: 5,
  },
  {
    word: "ОКРАСКА",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 1 },
      { name: "root", position: 1, shapeLength: 4 }, // "КРАС"
      { name: "suff", position: 5, shapeLength: 1 }, // "К"
      { name: "ending", position: 6, shapeLength: 1 }, // "А"
    ],
    length: 7,
  },
  {
    word: "ОРЕХОВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ОРЕХ"
      { name: "suff", position: 4, shapeLength: 2 }, // "ОВ"
      { name: "ending", position: 6, shapeLength: 2 }, // "ЫЙ"
    ],
    length: 8,
  },
  {
    word: "ОРЕШНИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ОРЕШ"
      { name: "suff", position: 4, shapeLength: 3 }, // "НИК"
    ],
    length: 7,
  },
  {
    word: "ОСЕННИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ОСЕН"
      { name: "suff", position: 4, shapeLength: 1 }, // "Н"
      { name: "ending", position: 5, shapeLength: 2 }, // "ИЙ"
    ],
    length: 7,
  },
  {
    word: "ОСИНА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ОСИН"
      { name: "ending", position: 4, shapeLength: 1 }, // "А"
    ],
    length: 5,
  },
  {
    word: "ОСИННИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ОСИН"
      { name: "suff", position: 4, shapeLength: 3 }, // "НИК"
    ],
    length: 7,
  },
  {
    word: "ОСИНОВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ОСИН"
      { name: "suff", position: 4, shapeLength: 2 }, // "ОВ"
      { name: "ending", position: 6, shapeLength: 2 }, // "ЫЙ"
    ],
    length: 8,
  },
  {
    word: "ОСЛИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 }, // "ОСЛ"
      { name: "suff", position: 3, shapeLength: 2 }, // "ИК"
    ],
    length: 5,
  },
  {
    word: "ОСЛИНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 }, // "ОСЛ"
      { name: "suff", position: 3, shapeLength: 2 }, // "ИН"
      { name: "ending", position: 5, shapeLength: 2 }, // "ЫЙ"
    ],
    length: 7,
  },
  {
    word: "ОСТРОВ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 }, // "ОСТРОВ"
    ],
    length: 6,
  },
  {
    word: "ОСТРОВОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 }, // "ОСТРОВ"
      { name: "suff", position: 6, shapeLength: 2 }, // "ОК"
    ],
    length: 8,
  },
  {
    word: "ОТЕЧЕСТВО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ОТЕЧ"
      { name: "suff", position: 4, shapeLength: 4 }, // "ЕСТВ"
      { name: "ending", position: 8, shapeLength: 1 }, // "О"
    ],
    length: 9,
  },
  {
    word: "ОТПЛЫТЬ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 }, // "ОТ"
      { name: "root", position: 2, shapeLength: 3 }, // "ПЛЫ"
      { name: "suff", position: 5, shapeLength: 2 }, // "ТЬ"
    ],
    length: 7,
  },
  {
    word: "ОТРАСТИ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 }, // "ОТ"
      { name: "root", position: 2, shapeLength: 3 }, // "РАС"
      { name: "suff", position: 5, shapeLength: 2 }, // "ТИ"
    ],
    length: 7,
  },
  {
    word: "ПАЛУБА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПАЛУБ"
      { name: "ending", position: 5, shapeLength: 1 }, // "А"
    ],
    length: 6,
  },
  {
    word: "ПАЛЬТИШКО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПАЛЬТ"
      { name: "suff", position: 5, shapeLength: 3 }, // "ИШК"
      { name: "ending", position: 8, shapeLength: 1 }, // "О"
    ],
    length: 9,
  },
  {
    word: "ПАПА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 }, // "ПАП"
      { name: "ending", position: 3, shapeLength: 1 }, // "А"
    ],
    length: 4,
  },
  {
    word: "ПАПОЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 }, // "ПАП"
      { name: "suff", position: 3, shapeLength: 3 }, // "ОЧК"
      { name: "ending", position: 6, shapeLength: 1 }, // "А"
    ],
    length: 7,
  },
  {
    word: "ПАРОВОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 }, // "ПАР"
      { name: "suff", position: 3, shapeLength: 2 }, // "ОВ"
      { name: "ending", position: 5, shapeLength: 2 }, // "ОЙ"
    ],
    length: 7,
  },
  {
    word: "ПАРОМЩИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПАРОМ"
      { name: "suff", position: 5, shapeLength: 3 }, // "ЩИК"
    ],
    length: 8,
  },
  {
    word: "ПАУТИНА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПАУТ"
      { name: "suff", position: 4, shapeLength: 2 }, // "ИН"
      { name: "ending", position: 6, shapeLength: 1 }, // "А"
    ],
    length: 7,
  },
  {
    word: "ПАУЧОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПАУЧ"
      { name: "suff", position: 4, shapeLength: 2 }, // "ОК"
    ],
    length: 6,
  },
  {
    word: "ПЕНАЛ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПЕНАЛ"
    ],
    length: 5,
  },
  {
    word: "ПЕРЕЕСТЬ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 4 }, // "ПЕРЕ"
      { name: "root", position: 4, shapeLength: 2 }, // "ЕС"
      { name: "suff", position: 6, shapeLength: 2 }, // "ТЬ"
    ],
    length: 8,
  },
  {
    word: "ПЕРЕЛОМНЫЙ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 4 }, // "ПЕРЕ"
      { name: "root", position: 4, shapeLength: 3 }, // "ЛОМ"
      { name: "suff", position: 7, shapeLength: 1 }, // "Н"
      { name: "ending", position: 8, shapeLength: 2 }, // "ЫЙ"
    ],
    length: 10,
  },
  {
    word: "ПЕРЕМЕНА",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 4 }, // "ПЕРЕ"
      { name: "root", position: 4, shapeLength: 3 }, // "МЕН"
      { name: "ending", position: 7, shapeLength: 1 }, // "А"
    ],
    length: 8,
  },
  {
    word: "ПЕРЕРОСТОК",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 4 }, // "ПЕРЕ"
      { name: "root", position: 4, shapeLength: 4 }, // "РОСТ"
      { name: "suff", position: 8, shapeLength: 2 }, // "ОК"
    ],
    length: 10,
  },
  {
    word: "ПЕРЕРЫВ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 4 }, // "ПЕРЕ"
      { name: "root", position: 4, shapeLength: 3 }, // "РЫВ"
    ],
    length: 7,
  },
  {
    word: "ПЕРЕУЛОК",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 4 }, // "ПЕРЕ"
      { name: "root", position: 4, shapeLength: 2 }, // "УЛ"
      { name: "suff", position: 6, shapeLength: 2 }, // "ОК"
    ],
    length: 8,
  },
  {
    word: "ПЁСИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 }, // "ПЁС"
      { name: "suff", position: 3, shapeLength: 2 }, // "ИК"
    ],
    length: 5,
  },
  {
    word: "ПЕТУШОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПЕТУШ"
      { name: "suff", position: 5, shapeLength: 2 }, // "ОК"
    ],
    length: 7,
  },
  {
    word: "ПЕЧКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 }, // "ПЕЧ"
      { name: "suff", position: 3, shapeLength: 1 }, // "К"
      { name: "ending", position: 4, shapeLength: 1 }, // "А"
    ],
    length: 5,
  },
  {
    word: "ПЕЧУРКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 }, // "ПЕЧ"
      { name: "suff", position: 3, shapeLength: 3 }, // "УРК"
      { name: "ending", position: 6, shapeLength: 1 }, // "А"
    ],
    length: 7,
  },
  {
    word: "ПИРАТ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПИРАТ"
    ],
    length: 5,
  },
  {
    word: "ПИРАТСКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПИРАТ"
      { name: "suff", position: 5, shapeLength: 2 }, // "СК"
      { name: "ending", position: 7, shapeLength: 2 }, // "ИЙ"
    ],
    length: 9,
  },
  {
    word: "ПИСЬМЕННЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПИСЬМ"
      { name: "suff", position: 5, shapeLength: 3 }, // "ЕНН"
      { name: "ending", position: 8, shapeLength: 2 }, // "ЫЙ"
    ],
    length: 10,
  },
  {
    word: "ПИСЬМЕЦО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПИСЬМ"
      { name: "suff", position: 5, shapeLength: 2 }, // "ЕЦ"
      { name: "ending", position: 7, shapeLength: 1 }, // "О"
    ],
    length: 8,
  },
  {
    word: "ПИСЬМО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПИСЬМ"
      { name: "ending", position: 5, shapeLength: 1 }, // "О"
    ],
    length: 6,
  },
  {
    word: "ПИТЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 2 }, // "ПИ"
      { name: "suff", position: 2, shapeLength: 2 }, // "ТЬ"
    ],
    length: 4,
  },
  {
    word: "ПЛАТОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПЛАТ"
      { name: "suff", position: 4, shapeLength: 2 }, // "ОК"
    ],
    length: 6,
  },
  {
    word: "ПЛОВЕЦ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПЛОВ"
      { name: "suff", position: 4, shapeLength: 2 }, // "ЕЦ"
    ],
    length: 6,
  },
  {
    word: "ПЛЫТЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 3 }, // "ПЛЫ"
      { name: "suff", position: 3, shapeLength: 2 }, // "ТЬ"
    ],
    length: 5,
  },
  {
    word: "ПОБЕДА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПОБЕД"
      { name: "ending", position: 5, shapeLength: 1 }, // "А"
    ],
    length: 6,
  },
  {
    word: "ПОГОДА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПОГОД"
      { name: "ending", position: 5, shapeLength: 1 }, // "А"
    ],
    length: 6,
  },
  {
    word: "ПОДВОДНИК",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 3 }, // "ПОД"
      { name: "root", position: 3, shapeLength: 3 }, // "ВОД"
      { name: "suff", position: 6, shapeLength: 3 }, // "НИК"
    ],
    length: 9,
  },
  {
    word: "ПОДВОДНЫЙ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 3 }, // "ПОД"
      { name: "root", position: 3, shapeLength: 3 }, // "ВОД"
      { name: "suff", position: 6, shapeLength: 1 }, // "Н"
      { name: "ending", position: 7, shapeLength: 2 }, // "ЫЙ"
    ],
    length: 9,
  },
  {
    word: "ПОДРОСТОК",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 3 }, // "ПОД"
      { name: "root", position: 3, shapeLength: 4 }, // "РОСТ"
      { name: "suff", position: 7, shapeLength: 2 }, // "ОК"
    ],
    length: 9,
  },
  {
    word: "ПОЕЗД",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 }, // "ПО"
      { name: "root", position: 2, shapeLength: 3 }, // "ЕЗД"
    ],
    length: 5,
  },
  {
    word: "ПОЕЗДКА",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 2 }, // "ПО"
      { name: "root", position: 2, shapeLength: 3 }, // "ЕЗД"
      { name: "suff", position: 5, shapeLength: 1 }, // "К"
      { name: "ending", position: 6, shapeLength: 1 }, // "А"
    ],
    length: 7,
  },
  {
    word: "ПОЛЕЗНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПОЛЕЗ"
      { name: "suff", position: 5, shapeLength: 1 }, // "Н"
      { name: "ending", position: 6, shapeLength: 2 }, // "ЫЙ"
    ],
    length: 8,
  },
  {
    word: "ПОЛНЕНЬКИЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПОЛН"
      { name: "suff", position: 4, shapeLength: 4 }, // "ЕНЬК"
      { name: "ending", position: 8, shapeLength: 2 }, // "ИЙ"
    ],
    length: 10,
  },
  {
    word: "ПОЛНОТА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПОЛН"
      { name: "suff", position: 4, shapeLength: 2 }, // "ОТ"
      { name: "ending", position: 6, shapeLength: 1 }, // "А"
    ],
    length: 7,
  },
  {
    word: "ПОЛЯНА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПОЛЯН"
      { name: "ending", position: 5, shapeLength: 1 }, // "А"
    ],
    length: 6,
  },
  {
    word: "ПОРОСЁНОК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПОРОС"
      { name: "suff", position: 5, shapeLength: 4 }, // "ЁНОК"
    ],
    length: 9,
  },
  {
    word: "ПОРТРЕТ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 7 }, // "ПОРТРЕТ"
    ],
    length: 7,
  },
  {
    word: "ПОРТФЕЛЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 8 }, // "ПОРТФЕЛЬ"
    ],
    length: 8,
  },
  {
    word: "ПОСУДА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПОСУД"
      { name: "ending", position: 5, shapeLength: 1 }, // "А"
    ],
    length: 6,
  },
  {
    word: "ПРАВИЛО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 }, // "ПРАВИЛ"
      { name: "ending", position: 6, shapeLength: 1 }, // "О"
    ],
    length: 7,
  },
  {
    word: "ПРАВША",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПРАВ"
      { name: "suff", position: 4, shapeLength: 1 }, // "Ш"
      { name: "ending", position: 5, shapeLength: 1 }, // "А"
    ],
    length: 6,
  },
  {
    word: "ПРАВЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПРАВ"
      { name: "ending", position: 4, shapeLength: 2 }, // "ЫЙ"
    ],
    length: 6,
  },
  {
    word: "ПРАЗДНИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 }, // "ПРАЗДН"
      { name: "suff", position: 6, shapeLength: 2 }, // "ИК"
    ],
    length: 8,
  },
  {
    word: "ПРЕКРАСНЫЙ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 3 }, // "ПРЕ"
      { name: "root", position: 3, shapeLength: 4 }, // "КРАС"
      { name: "suff", position: 7, shapeLength: 1 }, // "Н"
      { name: "ending", position: 8, shapeLength: 2 }, // "ЫЙ"
    ],
    length: 10,
  },
  {
    word: "ПРИЖАТЬ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 3 }, // "ПРИ"
      { name: "root", position: 3, shapeLength: 2 }, // "ЖА"
      { name: "suff", position: 5, shapeLength: 2 }, // "ТЬ"
    ],
    length: 7,
  },
  {
    word: "ПРИПЛЫТЬ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 3 }, // "ПРИ"
      { name: "root", position: 3, shapeLength: 3 }, // "ПЛЫ"
      { name: "suff", position: 6, shapeLength: 2 }, // "ТЬ"
    ],
    length: 8,
  },
  {
    word: "ПРИПОЛЗТИ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 3 }, // "ПРИ"
      { name: "root", position: 3, shapeLength: 4 }, // "ПОЛЗ"
      { name: "suff", position: 7, shapeLength: 2 }, // "ТИ"
    ],
    length: 9,
  },
  {
    word: "ПРИЯТЕЛЬ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 8 }, // "ПРИЯТЕЛЬ"
    ],
    length: 8,
  },
  {
    word: "ПРИЯТНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПРИЯТ"
      { name: "suff", position: 5, shapeLength: 1 }, // "Н"
      { name: "ending", position: 6, shapeLength: 2 }, // "ЫЙ"
    ],
    length: 8,
  },
  {
    word: "ПРОПОЛЗТИ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 3 }, // "ПРО"
      { name: "root", position: 3, shapeLength: 4 }, // "ПОЛЗ"
      { name: "suff", position: 7, shapeLength: 2 }, // "ТИ"
    ],
    length: 9,
  },
  {
    word: "ПРОСТАК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПРОСТА"
      { name: "suff", position: 5, shapeLength: 2 }, // "К"
    ],
    length: 7,
  },
  {
    word: "ПРОСТОЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 5 }, // "ПРОСТ"
      { name: "ending", position: 5, shapeLength: 2 }, // "ОЙ"
    ],
    length: 7,
  },
  {
    word: "ПТЕНЕЦ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПТЕН"
      { name: "suff", position: 4, shapeLength: 2 }, // "ЕЦ"
    ],
    length: 6,
  },
  {
    word: "ПТЕНЧИК",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПТЕН"
      { name: "suff", position: 4, shapeLength: 3 }, // "ЧИК"
    ],
    length: 7,
  },
  {
    word: "ПТИЦА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПТИЦ"
      { name: "ending", position: 4, shapeLength: 1 }, // "А"
    ],
    length: 5,
  },
  {
    word: "ПУСТО",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПУСТ"
      { name: "ending", position: 4, shapeLength: 1 }, // "О"
    ],
    length: 5,
  },
  {
    word: "ПУСТЫНЯ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПУСТ"
      { name: "suff", position: 4, shapeLength: 2 }, // "ЫН"
      { name: "ending", position: 6, shapeLength: 1 }, // "Я"
    ],
    length: 7,
  },
  {
    word: "ПУСТЫШКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПУСТ"
      { name: "suff", position: 4, shapeLength: 3 }, // "ЫШК"
      { name: "ending", position: 7, shapeLength: 1 }, // "А"
    ],
    length: 8,
  },
  {
    word: "ПЧЕЛА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПЧЕЛ"
      { name: "ending", position: 4, shapeLength: 1 }, // "А"
    ],
    length: 5,
  },
  {
    word: "ПЧЕЛИНЫЙ",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПЧЕЛ"
      { name: "suff", position: 4, shapeLength: 2 }, // "ИН"
      { name: "ending", position: 6, shapeLength: 2 }, // "ЫЙ"
    ],
    length: 8,
  },
  {
    word: "ПЧЁЛКА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 }, // "ПЧЁЛ"
      { name: "suff", position: 4, shapeLength: 1 }, // "К"
      { name: "ending", position: 5, shapeLength: 1 }, // "А"
    ],
    length: 6,
  },
  {
    word: "ПШЕНИЦА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 6 }, // "ПШЕНИЦ"
      { name: "ending", position: 6, shapeLength: 1 }, // "А"
    ],
    length: 7,
  },
];

export const WORDS_FOR_TEST = shuffle(allWords);
