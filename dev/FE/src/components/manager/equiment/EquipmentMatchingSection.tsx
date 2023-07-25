import { Reader } from '@/types/Reader';
import RfidCard from './RfidCard';
import ReaderAddButton from './ReaderAddButton';

interface EquipmentMatchingSectionProps {
  isOnEdit: boolean;
  readers: Reader[];
  onReaderAddClick: () => void;
  onEquipmentDrop: (readerData: Reader, droppedItem: { id: string }) => void;
}

const EquipmentMatchingSection = ({
  isOnEdit,
  readers,
  onReaderAddClick,
  onEquipmentDrop,
}: EquipmentMatchingSectionProps) => {
  return (
    <div
      className="py-8 px-4 shadow-lg rounded-xl flex flex-wrap bg-slate-200"
      style={{ width: 800, height: 520 }}
    >
      {readers?.map((reader) => (
        <RfidCard
          key={reader.reader}
          onEquipmentDrop={onEquipmentDrop}
          data={reader}
        />
      ))}
      {isOnEdit ? <ReaderAddButton onClick={onReaderAddClick} /> : null}
    </div>
  );
};

export default EquipmentMatchingSection;
