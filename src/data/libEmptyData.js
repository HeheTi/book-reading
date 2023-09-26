import { ReactComponent as StepOne } from 'images/stepOne.svg';
import { ReactComponent as StepTwo } from 'images/stepTwo.svg';
import { ReactComponent as EmptyArrow } from 'images/emptyIcon.svg';

const libEmptyData = {
  steps: [
    {
      stepNumber: 'Крок 1.',
      title: 'Створіть особисту бібліотеку',
      descr: 'Додайте до неї книжки, які маєте намір прочитати.',
      icon: <StepOne width="22" height="17" />,
    },
    {
      stepNumber: 'Крок 2.',
      title: 'Сформуйте своє перше тренування',
      descr: 'Визначте ціль, оберіть період, розпочинайте тренування.',
      icon: <StepTwo width="22" height="17" />,
    },
  ],
  icon: <EmptyArrow width="10" height="12" />,
};

export default libEmptyData;
