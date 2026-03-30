import { useDispatch } from "react-redux";
import { closeModal } from "../../slice/modalSlice";

const FollowUpModal = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="modal-layout" tabIndex="-1">
        <div className="modal-box">
          <form>
            <div className="modal-header">
              <h5 className="text-secondary">更新回診數據</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(closeModal())}
              ></button>
            </div>
            <div className="modal-body my-3 mx-5">
              <div className="mb-3">
                <label htmlFor="followUpDate" className="form-label">
                  檢查日期
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="followUpDate"
                  placeholder="請輸入檢驗日期"
                />
              </div>
              <div>
                <button type="button" className="btn btn-success">
                  新增檢驗項目
                </button>
              </div>
            </div>
            <div className="modal-footer justify-content-center gap-3">
              <button type="submit" className="btn w-25 btnCheckup">
                確認
              </button>
              <button
                type="button"
                className="btn w-25 btnOutlineCheckup"
                onClick={() => dispatch(closeModal())}
              >
                取消
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FollowUpModal;
