import React, { FC } from 'react';
import { IResult } from '../../interfaces/IQuestion';

import plusSVG from '../../assets/svg/plus.svg';
import minusSVG from '../../assets/svg/minus.svg';
import { cleanString } from '../../utils/helper.functions';

type Props = {
  result: IResult
};

const ResultItem: FC<Props> = ({ result }) => {
  const bgColor = result.isCorrect ? 'bg-green-300' : 'bg-red-300';

  return (
    <div className={`flex my-2 w-full px-1 rounded-md ${bgColor}`} key={result.question}>
      <div className="grid justify-items-center items-center h-20 w-12">
        <img className="h-4 w-4" src={result.isCorrect ? `${plusSVG}` : `${minusSVG}`} alt="plus" />
      </div>
      <div className="grid justify-items-center items-center">
        <p className="text-left pl-6">
          {cleanString(result.question)}
        </p>
      </div>
    </div>
  );
};

export default ResultItem;
