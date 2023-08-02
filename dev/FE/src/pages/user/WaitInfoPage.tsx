import Modal from '@/components/common/Modal';
import TimeInput from '@/components/user/waitinfo/TimeInput';
import WaitEquitmentList from '@/components/user/waitinfo/WaitEquitmentList';
import WaitTitle from '@/components/user/waitinfo/WaitTitle';
import { useState, useEffect, ChangeEvent } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
// import { getUsingGymUsers } from '@/api/waitInfoApi';
import FormInput from '@/components/common/FormInput';
import { registGym } from '@/api/waitInfoApi';

const WaitInfoPage = () => {
  // const { data: usingGymUsers, status } = useQuery(
  //   ['getUsingGymUsers'],
  //   getUsingGymUsers,
  // );
  const registGymMutation = useMutation(() => registGym(regiGymCode), {
    onSuccess: () => {},
    onError: () => {},
  });
  const [checkGymApprove, setCheckGymApprove] = useState(false);
  const handleGymApproveButton = () => {
    // setCheckGymApprove(true);
    registGymMutation.mutate();
  };

  const [isModal, setIsModal] = useState(false);
  const handleOpenModal = () => {
    setIsModal(true);
  };
  const handleCloseModal = () => {
    setIsModal(false);
  };

  const [regiGymCode, setRegiGymCode] = useState<string>('');
  const handleChangeGymCode = (event: ChangeEvent<HTMLInputElement>) => {
    setRegiGymCode(event.target.value);
  };

  const [pickEquipment, setPickEquipment] = useState('');
  const handleSetPickEquipment = (equipment: string) => {
    setPickEquipment(equipment);
  };
  useEffect(handleCloseModal, [pickEquipment]);

  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);

  useEffect(() => {
    const date = new Date();
    const roundedMinute = Math.ceil(date.getMinutes() / 10) * 10;
    setHour(date.getHours());
    setMinute(roundedMinute);
  }, []);

  return (
    <div className="bg-[#f2f2f2]">
      {checkGymApprove ? (
        <div>
          <div className="m-2 text-black">
            <div className="float-left font-bold text-lg">나의 헬스장</div>
            {/* <div className="float-right">현재 {usingGymUsers}명 이용중</div> */}
          </div>
          <WaitTitle text="킹콩 피트니스" />
          <div className="flex justify-evenly items-center my-4">
            {isModal && (
              <Modal isOpen={isModal} onClose={handleCloseModal}>
                <WaitEquitmentList
                  equipment={pickEquipment}
                  handlePickEquipment={handleSetPickEquipment}
                />
              </Modal>
            )}
            <EquipmentCircle equipment={pickEquipment} />
            <button
              className="w-[200px] h-[66px] text-xl"
              onClick={handleOpenModal}
            >
              기구 선택 하기
            </button>
          </div>
          <div className="w-[330px] mx-auto flex justify-between items-center my-4">
            <div>
              <TimeInput
                hour={hour}
                minute={minute}
                setHour={setHour}
                setMinute={setMinute}
              />
            </div>
            <button className="w-25 h-11 bg-CustomOrange">조회</button>
          </div>

          <div className="w-[360px] h-[200px] flex justify-evenly py-2 bg-CustomGray rounded-lg mx-auto">
            <div className="w-[120px] text-black border-r-2 border-black">
              <span className="font-bold text-center">실시간</span>
              <p>6명</p>
            </div>
            <div className="flex flex-col justify-evenly">
              <div className="w-[176px] h-[40px] bg-white rounded"></div>
              <div className="w-[176px] h-[40px] bg-white rounded"></div>
              <div className="w-[176px] h-[40px] bg-white rounded"></div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <WaitTitle text="헬스장을 등록하세요!" />
          <div className="p-8">
            <FormInput
              type="text"
              value={regiGymCode}
              placeholder="헬스장 번호"
              onChange={handleChangeGymCode}
            />
            <button onClick={handleGymApproveButton}>등록</button>
            {/* <button
              onClick={handleGymApproveButton}
              className="w-10 h-10 rounded-full mx-auto border-2 flex justify-center items-center border-white"
            >
              <span className="text-2xl">+</span>
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

interface EquipmentCircleProps {
  equipment: string;
}

const EquipmentCircle = ({ equipment }: EquipmentCircleProps) => {
  return (
    <div className="bg-white w-[84px] h-[84px] m-3 rounded-full flex justify-center items-center">
      {equipment === '' ? (
        <span className="text-2xl text-black">?</span>
      ) : (
        <img
          src={`/img/equipments/${equipment}.png`}
          alt={equipment}
          width={52}
        />
      )}
    </div>
  );
};

export default WaitInfoPage;
