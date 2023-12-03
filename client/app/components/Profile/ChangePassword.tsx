import { FC, useEffect, useState } from "react";
import { styles } from "../../../app/styles/style";
import { AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import { useUpdatePasswordMutation } from "../../../redux/features/user/userApi";
import toast from "react-hot-toast";

type Props = {}

const ChangePassword: FC<Props> = (props: Props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [updatePassword, {isSuccess, error}] = useUpdatePasswordMutation();

  const passwordChangeHandler = async (e: any) => {
    e.preventDefault();

    if(newPassword !== confirmPassword){
      toast.error("Passwords do not match")
      setNewPassword("");
      setConfirmPassword("");
    }
    else {
      await updatePassword({oldPassword, newPassword});
    }

  };

  useEffect(() => {
    if(isSuccess){
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      toast.success("Password updated successfully")
    }
    if(error){
      if("data" in error){
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);
  
  return (
    <div className="w-full pl-7 px-2 800px:px-5 800px:pl-0">
      <h1 className="block text-[25px] 800px:text-[30px] font-Poppins text-center font-[500] text-slate-800 dark:text-slate-50 pb-2">
        Change Password
      </h1>
      <div className="w-full">
        <form 
          aria-required
          onSubmit={passwordChangeHandler}
          className="flex flex-col items-center"
        >
          <div className="w-[100%] 800px:w-[60%] mt-5 relative">
            <label className="block pb-1 text-slate-800 dark:text-slate-50">
              Enter Your Old Password
            </label>
            <input 
              type={showOldPassword ? "text" : "password" }
              className={`${styles.input} border border-red-400 dark:border-teal-400 mb-4 800px:mb-0 text-slate-800 dark:text-slate-50`}
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}  
            />
            {!showOldPassword? (
                  <AiOutlineEyeInvisible
                      className="absolute bottom-6 800px:bottom-3 right-2 z-1 cursor-pointer dark:text-[#ffffff]"
                      size={20}
                      onClick={() => setShowOldPassword(true)}
                  />
              ) : (
                  <AiOutlineEye
                      className="absolute bottom-6 800px:bottom-3 right-2 z-1 cursor-pointer dark:text-[#ffffff]"
                      size={20}
                      onClick={() => setShowOldPassword(false)}
                  />
              )
            }
          </div>
          <div className="w-[100%] 800px:w-[60%] mt-3 relative">
            <label className="block pb-1 text-slate-800 dark:text-slate-50">
              Enter Your New Password
            </label>
            <input 
              type={showNewPassword ? "text" : "password" }
              className={`${styles.input} border border-red-400 dark:border-teal-400 mb-4 800px:mb-0 text-slate-800 dark:text-slate-50`}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}  
            />
            {!showNewPassword? (
                  <AiOutlineEyeInvisible
                      className="absolute bottom-6 800px:bottom-3 right-2 z-1 cursor-pointer dark:text-[#ffffff]"
                      size={20}
                      onClick={() => setShowNewPassword(true)}
                  />
              ) : (
                  <AiOutlineEye
                      className="absolute bottom-6 800px:bottom-3 right-2 z-1 cursor-pointer dark:text-[#ffffff]"
                      size={20}
                      onClick={() => setShowNewPassword(false)}
                  />
              )
            }
          </div>
          <div className="w-[100%] 800px:w-[60%] mt-3 relative">
            <label className="block pb-1 text-slate-800 dark:text-slate-50">
              Confirm Your New Password
            </label>
            <input 
              type={showConfirmPassword ? "text" : "password" }
              className={`${styles.input} border border-red-400 dark:border-teal-400 mb-4 800px:mb-0 text-slate-800 dark:text-slate-50`}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}  
            />
            {!showConfirmPassword? (
                  <AiOutlineEyeInvisible
                      className="absolute bottom-6 800px:bottom-3 right-2 z-1 cursor-pointer dark:text-[#ffffff]"
                      size={20}
                      onClick={() => setShowConfirmPassword(true)}
                  />
              ) : (
                  <AiOutlineEye
                      className="absolute bottom-6 800px:bottom-3 right-2 z-1 cursor-pointer dark:text-[#ffffff]"
                      size={20}
                      onClick={() => setShowConfirmPassword(false)}
                  />
              )
            }
          </div>
          <div className="w-[100%] 800px:w-[60%] mt-3">
            <input 
              type="submit"
              value={"Update"}
              className={`w-[100%] h-[40px] border border-red-400 dark:border-teal-400 text-center text-slate-800 dark:text-slate-50 rounded-[3px] 800px:mt-8 cursor-pointer`}
              required
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword