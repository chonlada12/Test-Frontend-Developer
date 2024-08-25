import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Checkbox, FormInstance, Table, TableColumnsType } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { TableRowSelection } from 'antd/es/table/interface';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCustom } from '../../components/display';
import { PersonalData } from './interface';

interface TableContentProps {
  form: FormInstance;
}

const TableContent = ({ form }: TableContentProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const dataTAble = useSelector((state: { personal: PersonalData[] }) => state.personal);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const onEdit = (record: PersonalData) => {
    form.resetFields();
    const dateOfBirth = dayjs(record.dateOfBirth);
    form.setFieldsValue({ ...record, dateOfBirth });
  };

  const onDelete = (record: PersonalData) => {
    if (!record.id) return;
    dispatch({ type: 'personal/deleteId', payload: record.id });
  };

  const onMultiDelete = () => {
    if (selectedRowKeys.length === 0) return;
    dispatch({ type: 'personal/multiDelete', payload: selectedRowKeys });
    setSelectAll(false);
  };

  const columns: TableColumnsType<PersonalData> = [
    {
      title: t('name'),
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (__, rc) => {
        const name = `${t(rc.title)} ${rc.firstName} ${rc.lastName}`;
        return <div>{name}</div>;
      },
    },
    {
      title: t('gender'),
      dataIndex: 'gender',
      key: 'gender',
      sorter: (a, b) => a.gender.length - b.gender.length,
      render: (__, rc) => {
        return <div>{t(rc.gender)}</div>;
      },
    },
    {
      title: t('phone-number'),
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      sorter: (a, b) => a.phoneNumber.length - b.phoneNumber.length,
    },
    {
      title: t('nationality'),
      dataIndex: 'nationality',
      key: 'nationality',
      sorter: (a, b) => a.nationality.length - b.nationality.length,
      render: (__, rc) => {
        return <div>{t(rc.nationality)}</div>;
      },
    },
    {
      title: t('manage'),
      dataIndex: 'manage',
      width: 150,
      render: (__, rc) => {
        return (
          <div className="flex gap-4">
            <ButtonCustom onClick={() => onEdit(rc)} icon={<EditFilled />} />
            <ButtonCustom onClick={() => onDelete(rc)} icon={<DeleteFilled />} />
          </div>
        );
      },
    },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<PersonalData> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const onSelectAll = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      setSelectedRowKeys(dataTAble.map((item) => item.id));
      setSelectAll(e.target.checked);
    } else {
      setSelectedRowKeys([]);
      setSelectAll(e.target.checked);
    }
  };

  return (
    <div className="px-16 pt-12">
      <div className="pb-2">
        <Checkbox onChange={onSelectAll} checked={selectAll}>
          {t('select-all')}
        </Checkbox>
        <ButtonCustom onClick={onMultiDelete}>{t('delete-data')}</ButtonCustom>
      </div>
      <Table
        rowSelection={rowSelection}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        columns={columns}
        dataSource={dataTAble || []}
      />
    </div>
  );
};

export default TableContent;
